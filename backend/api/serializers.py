from rest_framework import serializers
from rest_framework.authtoken.models import Token
from datetime import datetime

from .models import CustomUser, Tenant, Landlord, Apartment, Lease, Notification, Keycode, Complaint

class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ["email", "first_name", "last_name", "phone_number", "password"]

class TenantSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()

    class Meta:
        model = Tenant
        fields = ["user", "emergency_contact", "emergency_email", "emergency_phone"]
    
    def create(self, validated_data):
        user_data = validated_data.pop("user")  
        user = CustomUser.objects.create_user(**user_data)  
        tenant = Tenant.objects.create(user=user, **validated_data) 

        token, created = Token.objects.get_or_create(user = user)
        return tenant, token 
    
    def update(self, instance, validated_data):
        user_data = validated_data.pop("user", None)

        if user_data:
            for attr, value in user_data.items():
                if attr != "email": 
                    setattr(instance.user, attr, value)
            instance.user.save()
        
        for attr, value in validated_data.items():
            setattr(instance, attr, value)  
        instance.save()

        return instance
    
class LandlordSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()

    class Meta:
        model = Landlord
        fields = ["user", "address_line1", "address_line2", "city", "state", "zipcode"]
    
    def create(self, validated_data):
        user_data = validated_data.pop("user")  
        user = CustomUser.objects.create_user(**user_data)  
        landlord = Landlord.objects.create(user=user, **validated_data) 

        token, created = Token.objects.get_or_create(user = user)
        return landlord, token 
    
    
    def update(self, instance, validated_data):
        user_data = validated_data.pop("user", None)
        if user_data:
            for attr, value in user_data.items():
                if attr != "email": 
                    setattr(instance.user, attr, value)
            instance.user.save()
        
        for attr, value in validated_data.items():
            setattr(instance, attr, value)  
        instance.save()

        return instance
    
class ApartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apartment
        fields = ["apt_number", "apt_type", "available_permits", "isVacant"]
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        if self.context['request'].method == 'POST':
            data.pop('available_permits', None)
            data.pop('isVacant', None)
        return data

class LeaseSerializer(serializers.ModelSerializer):
    tenant_email = serializers.EmailField(write_only=True)
    apt_number = serializers.CharField(write_only=True)

    class Meta:
        model = Lease
        fields = ['lease_id', 'landlord', 'tenant', 'apartment', 'lease_created', 'lease_signed', 'lease_end', 'tenant_email', 'apt_number']
        read_only_fields = ['lease_id', 'landlord', 'tenant', 'apartment', 'lease_created']

    def create(self, validated_data):
        tenant_email = validated_data.pop('tenant_email')
        apt_number = validated_data.pop('apt_number')
        end_date = validated_data.pop('lease_end')

        if end_date <= datetime.today().date():
            raise serializers.ValidationError({"lease_end": "Lease end date should be in the future"})

        try:
            tenant = Tenant.objects.get(user=CustomUser.objects.get(email=tenant_email))
            if Lease.objects.filter(tenant=tenant).exists():
                raise serializers.ValidationError({"error": "Tenant already has an active or pending lease."})
        except Tenant.DoesNotExist:
            raise serializers.ValidationError({'tenant_email': 'Tenant with this email does not exist.'})
        

        try:
            apartment = Apartment.objects.get(apt_number=apt_number)
            if Lease.objects.filter(apartment=apartment).exists():
                raise serializers.ValidationError({"error": "Apartment already has an active or pending lease."})
        except Apartment.DoesNotExist:
            raise serializers.ValidationError({'apartment_number': 'Apartment with this number does not exist.'})
    
        request = self.context.get('request')

        if request and hasattr(request, 'user'):
            validated_data['landlord'] = Landlord.objects.get(user=CustomUser.objects.get(email=request.user.email))
        
        lease = Lease.objects.create(tenant=tenant, apartment=apartment, lease_end=end_date, **validated_data)
        notification = Notification.objects.create(user=CustomUser.objects.get(email=tenant_email), message="Lease created by landlord. Please sign it.")
        notification.save()

        return lease
    
class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'

class KeycodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keycode
        fields = '__all__'
        read_only_fields = ['key_generated', ' key']
    
class ComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complaint
        fields = ['complaint_title', 'complaint_desc', 'complaint_time', 'complainer']
        read_only_fields = ['complaint_time', 'complainer']
        
    
    