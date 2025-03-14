from django.shortcuts import render
from rest_framework import generics, permissions, status, authentication
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate

from .serializers import TenantSerializer, LandlordSerializer
from .custom_permissions import IsTenant, IsLandlord, IsUnauthenticated
from .models import Landlord, Tenant

import requests

# Create your views here.

@api_view(['GET'])
def user_status(request):
    print(request.user)
    print(request.auth)
    if request.user.is_authenticated:
        return Response({"message": "user logged in"})

    return Response({"message": "user not logged in"})

@api_view(['POST'])
@permission_classes([IsUnauthenticated])
def register_landlord(request):
    serializer = LandlordSerializer(data=request.data)
    if serializer.is_valid():
        landlord = serializer.save()
        user = landlord.user
        authenticated_user = authenticate(email=user.email, password=request.data["user"]["password"])

        if authenticated_user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "user": serializer.data}, status=status.HTTP_201_CREATED)
     

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsUnauthenticated])
def register_tenant(request):
    serializer = TenantSerializer(data=request.data)
    if serializer.is_valid():
        tenant = serializer.save()
        user = tenant.user
        authenticated_user = authenticate(email=user.email, password=request.data["user"]["password"])

        if authenticated_user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "user": serializer.data}, status=status.HTTP_201_CREATED)
     

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsUnauthenticated])
def login_landlord(request):
    user = authenticate(email=request.data["email"], password=request.data["password"])

    if user:
        landlord = Landlord.objects.get(user=user)
        serialzer = LandlordSerializer(landlord)

        if landlord:
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "landlord": serialzer.data}, status=status.HTTP_200_OK)

    return Response({"message": "can't login landlord"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsUnauthenticated])
def login_tenant(request):
    user = authenticate(email=request.data["email"], password=request.data["password"])

    if user:
        tenant = Tenant.objects.get(user=user)
        serialzer = TenantSerializer(tenant)

        if tenant:
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key, "landlord": serialzer.data}, status=status.HTTP_200_OK)

    return Response({"message": "can't login tenant"}, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()  # Delete the token
        return Response({"message": "Successfully logged out."}, status=200)

