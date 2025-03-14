from rest_framework.permissions import BasePermission


class IsTenant(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user

class IsLandlord(BasePermission):
    def has_object_permission(self, request, view, obj):
        print(obj.user, request.user)
        return obj.user == request.user

class IsUnauthenticated(BasePermission):
    def has_permission(self, request, view):
        print("In Permission", request.user.is_authenticated)
        return not request.user.is_authenticated