from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import RegisterLandlordView, RegisterTenantView, LoginView, LogoutView, ApartmentViewSet

router = DefaultRouter()
router.register(r'apartment', ApartmentViewSet)

urlpatterns = [
    path('register-landlord/', RegisterLandlordView.as_view(), name='register-landlord'),
    path('register-tenant/', RegisterTenantView.as_view(), name='register-tenant'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),

    path('', include(router.urls))
]