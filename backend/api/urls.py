from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import RegisterLandlordView, RegisterTenantView, LoginView, LogoutView, ApartmentViewSet, CreateLeaseView

router = DefaultRouter()
router.register(r'apartment', ApartmentViewSet)


urlpatterns = [
    path('', include(router.urls)),

    path('register-landlord/', RegisterLandlordView.as_view(), name='register-landlord'),
    path('update-landlord/', UpdateLandlordView.as_view(), name='update-landlord'),
    path('register-tenant/', RegisterTenantView.as_view(), name='register-tenant'),
    path('update-tenant/', UpdateTenantView.as_view(), name='update-tenant'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),

    path('create-lease/', CreateLeaseView.as_view(), name='create_lease'),

]