from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import RegisterLandlordView, RegisterTenantView, UpdateTenantView, UpdateLandlordView,  LoginView, LogoutView, ApartmentViewSet, LeaseView, SignLeaseView, GetDeleteLeaseView, ParkingViewSet

router = DefaultRouter()
router.register(r'apartment', ApartmentViewSet)
router.register(r'parking', ParkingViewSet, basename='parking')


urlpatterns = [
    path('', include(router.urls)),

    path('register-landlord/', RegisterLandlordView.as_view(), name='register-landlord'),
    path('update-landlord/', UpdateLandlordView.as_view(), name='update-landlord'),
    path('register-tenant/', RegisterTenantView.as_view(), name='register-tenant'),
    path('update-tenant/', UpdateTenantView.as_view(), name='update-tenant'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),

    path('lease/', LeaseView.as_view(), name='create-list-lease'),
    path('sign-lease/', SignLeaseView.as_view(), name='sign-lease'),
    path('lease/<str:lease_id>/', GetDeleteLeaseView.as_view(), name='get-delete-lease')

]