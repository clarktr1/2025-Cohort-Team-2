import uuid 

from django.shortcuts import render
from rest_framework import generics, permissions, status, authentication, viewsets
from django.core.exceptions import ObjectDoesNotExist
from django.utils import timezone
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404
 
from .serializers import TenantSerializer, LandlordSerializer, ApartmentSerializer, LeaseSerializer, ParkingSerializer
from .custom_permissions import IsTenant, IsLandlord, IsUnauthenticated, IsTenantReadOnly
from .models import Landlord, Tenant, Apartment, Lease, Notification, Parking

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
        return Response({"token": token.key, "landlord": tenant_serializer.data}, status=status.HTTP_201_CREATED)


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
        lease_uuid = uuid.UUID(lease_id)  # Convert to UUID
        return get_object_or_404(Lease, lease_id=lease_uuid)


class ParkingViewSet(viewsets.ModelViewSet):
    queryset = Parking.objects.all()
    serializer_class = ParkingSerializer