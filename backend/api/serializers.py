from rest_framework import serializers
from .models import CustomUser, Tenant, Landlord


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
        user_data = validated_data.pop("user")  # Extract user data
        user = CustomUser.objects.create_user(**user_data)  # Create user instance
        tenant = Tenant.objects.create(user=user, **validated_data)  # Create tenant instance
        return tenant


class LandlordSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()

    class Meta:
        model = Landlord
        fields = ["user", "address_line1", "address_line2", "city", "state", "zipcode"]
    
    def create(self, validated_data):
        user_data = validated_data.pop("user")  # Extract user data
        user = CustomUser.objects.create_user(**user_data)  # Create user instance
        landlord = Landlord.objects.create(user=user, **validated_data)  # Create landlord instance
        return landlord