from rest_framework.permissions import BasePermission

from .models import Landlord, Tenant


class IsTenant(BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.is_authenticated and Tenant.objects.filter(user=request.user).exists()

class IsLandlord(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and Landlord.objects.filter(user=request.user).exists()

class IsUnauthenticated(BasePermission):
    def has_permission(self, request, view):
        print("In Permission", request.user.is_authenticated)
        return not request.user.is_authenticated