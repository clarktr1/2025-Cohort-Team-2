import uuid 

from django.shortcuts import render
from rest_framework import generics, permissions, status, authentication, viewsets, serializers
from django.core.exceptions import ObjectDoesNotExist
from django.utils import timezone
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404
 
from .serializers import TenantSerializer, LandlordSerializer, ApartmentSerializer, LeaseSerializer, NotificationSerializer, KeycodeSerializer, ComplaintSerializer
from .custom_permissions import IsTenant, IsLandlord, IsUnauthenticated, IsTenantReadOnly
from .models import CustomUser, Landlord, Tenant, Apartment, Lease, Notification, Keycode, Complaint
from .utils import get_apartment_from_tenant

# Create your views here.

class RegisterLandlordView(generics.CreateAPIView):
    permission_classes = [IsUnauthenticated]
    serializer_class = LandlordSerializer
    queryset = Landlord.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        landlord, token = serializer.save()
        landlord_serializer = LandlordSerializer(landlord)
        return Response({"token": token.key, "landlord": landlord_serializer.data}, status=status.HTTP_201_CREATED)

    
class RegisterTenantView(generics.CreateAPIView):
    permission_classes = [IsUnauthenticated]
    serializer_class = TenantSerializer
    queryset = Tenant.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        tenant, token = serializer.save()
        tenant_serializer = TenantSerializer(tenant)
        return Response({"token": token.key, "tenant": tenant_serializer.data}, status=status.HTTP_201_CREATED)


class UpdateLandlordView(generics.UpdateAPIView):
    permission_classes = [IsLandlord]
    serializer_class = LandlordSerializer
    queryset = Landlord.objects.all()

    def get_object(self):
        user = self.request.user
        return Landlord.objects.get(user=user)
    

class UpdateTenantView(generics.UpdateAPIView):
    permission_classes = [IsTenant]
    serializer_class = TenantSerializer
    queryset = Tenant.objects.all()

    def get_object(self):
        user = self.request.user
        return Tenant.objects.get(user=user)


class LoginView(APIView):
    permission_classes = [IsUnauthenticated]

    def post(self, request):
        user = authenticate(email=request.data["email"], password=request.data["password"])

        if user:
            try:
                landlord = Landlord.objects.get(user=user)
            except Landlord.DoesNotExist:
                landlord = None

            if landlord:
                serialzer = LandlordSerializer(landlord)
                token, created = Token.objects.get_or_create(user=user)
                return Response({"token": token.key, "landlord": serialzer.data}, status=status.HTTP_200_OK)
            
            try:
                tenant = Tenant.objects.get(user=user)
            except Tenant.DoesNotExist:
                tenant = None

            if tenant:
                serialzer = TenantSerializer(tenant)
                token, created = Token.objects.get_or_create(user=user)
                return Response({"token": token.key, "tenant": serialzer.data}, status=status.HTTP_200_OK)

        return Response({"message": "invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)


class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        return Response({"message": "Successfully logged out."}, status=status.HTTP_200_OK)


class ApartmentViewSet(viewsets.ModelViewSet):
    queryset = Apartment.objects.all()
    serializer_class = ApartmentSerializer
    lookup_field = 'apt_number'
    permission_classes = [IsLandlord|IsTenantReadOnly]

    def get_queryset(self):
        queryset = super().get_queryset()
        vacant = self.request.data.get('vacant')

        if vacant:
            return queryset.filter(isVacant = (vacant == "True"))

        return queryset




class LeaseView(generics.ListCreateAPIView):
    permission_classes = [IsLandlord]
    queryset = Lease.objects.all()
    serializer_class = LeaseSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        return Response(response.data, status=status.HTTP_201_CREATED)
    
    def get_queryset(self):
        queryset = super().get_queryset()
        unsigned = self.request.data.get('unsigned')

        if unsigned:
            queryset = queryset.filter(lease_signed__isnull = (unsigned == "True"))

        return queryset
    
class GetTenantView(generics.RetrieveAPIView):
    permission_classes = [IsLandlord]
    serializer_class = TenantSerializer
    queryset = Tenant.objects.all()


class GetLandlordView(generics.RetrieveAPIView):
    permission_classes = [IsLandlord]
    serializer_class = LandlordSerializer
    queryset = Landlord.objects.all()

class ListLandlordsView(generics.ListAPIView):
    queryset = Landlord.objects.all()
    serializer_class = LandlordSerializer
    permission_classes = [IsLandlord]



class ListTenantsView(generics.ListAPIView):
    queryset = Tenant.objects.all()
    serializer_class = TenantSerializer
    permission_classes = [IsLandlord]

    def get_queryset(self):
        queryset = super().get_queryset()
        inactive = self.request.data.get('inactive')

        if inactive:
            queryset = queryset.filter(lease__isnull=(inactive == "True"))

        
        return queryset 


    

class SignLeaseView(generics.RetrieveUpdateAPIView):
    permission_classes = [IsTenant]
    queryset = Lease.objects.all()
    serializer_class = LeaseSerializer

    def get_object(self):
        user = self.request.user
        try:
            tenant = Tenant.objects.get(user=user)
            
            if tenant:
                return Lease.objects.get(tenant=tenant)

        except ObjectDoesNotExist:
            return Response({"error": "Lease not found for the tenant"}, status=status.HTTP_404_NOT_FOUND)
        
    
    def perform_update(self, serializer):
        instance = serializer.instance

        if not instance.lease_signed:
            serializer.save(lease_signed=timezone.now())

            if instance.apartment:
                instance.apartment.isVacant = False
                instance.apartment.save()

                notification = Notification.objects.create(user=instance.landlord.user, message=f"Lease signed by {instance.tenant} on Apartment {instance.apartment}")
                notification.save()


class GetDeleteLeaseView(generics.RetrieveDestroyAPIView):
    permission_classes = [IsLandlord]
    queryset = Lease.objects.all()
    serializer_class = LeaseSerializer
    lookup_field = 'lease_id'

    def get_object(self):
        lease_id = self.kwargs['lease_id']
        lease_uuid = uuid.UUID(lease_id)  
        return get_object_or_404(Lease, lease_id=lease_uuid)


class NotificationViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Notification.objects.all().order_by('-time')
    serializer_class = NotificationSerializer
    permission_classes = [permissions.IsAuthenticated]


    def get_queryset(self):
        queryset = super().get_queryset()

        return queryset.filter(user=self.request.user)
    

class KeycodeView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Keycode.objects.all()
    serializer_class = KeycodeSerializer

    def get_object(self):
        apt_number = self.kwargs['apt_number']
        apartment = get_object_or_404(Apartment, apt_number = apt_number)

        code, created = Keycode.objects.get_or_create(apartment = apartment)
        code.save()
        return code


class CreateComplaintView(generics.CreateAPIView):
    queryset = Complaint.objects.all()
    serializer_class = ComplaintSerializer
    permission_classes = [IsTenant]
    
    def perform_create(self, serializer):
        apartment = get_apartment_from_tenant(self.request.user.email)
        
        if not apartment:
            raise serializers.ValidationError({"error": "Apartment not found for user"})
        
        serializer.save(complainer=apartment)

class ComplaintListView(generics.ListAPIView):
    queryset = Complaint.objects.all().order_by('-complaint_time')
    serializer_class = ComplaintSerializer
    permission_classes = [IsLandlord|IsTenantReadOnly]

    def get_queryset(self):
        apartment = get_apartment_from_tenant(self.request.user.email)

        try:
            landlord = Landlord.objects.get(user = self.request.user)
        except ObjectDoesNotExist:
            landlord = None

        if not apartment and not landlord:
            return Complaint.objects.none()

        queryset = super().get_queryset()
        
        if apartment:
            return queryset.filter(complainer = apartment)
        
        return queryset