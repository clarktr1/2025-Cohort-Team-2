from rest_framework.permissions import BasePermission, SAFE_METHODS

from .models import Landlord, Tenant


class IsTenant(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and Tenant.objects.filter(user=request.user).exists()
    
class IsTenantReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS and request.user.is_authenticated and Tenant.objects.filter(user=request.user).exists()

class IsLandlord(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and Landlord.objects.filter(user=request.user).exists()

class IsUnauthenticated(BasePermission):
    def has_permission(self, request, view):
        return not request.user.is_authenticated