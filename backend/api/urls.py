from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import RegisterLandlordView, RegisterTenantView, UpdateTenantView, UpdateLandlordView,  LoginView, LogoutView, ApartmentViewSet, LeaseView, SignLeaseView, GetDeleteLeaseView, NotificationViewset, KeycodeView, CreateComplaintView, ComplaintListView, ListLandlordsView, ListTenantsView, GetTenantView, GetLandlordView, CreateParkingView, ParkingListView

router = DefaultRouter()
router.register(r'apartment', ApartmentViewSet)
router.register(r'notifications', NotificationViewset)
router.register(r'parkings', ParkingListView)


urlpatterns = [
    path('', include(router.urls)),

    path('register-landlord/', RegisterLandlordView.as_view(), name='register-landlord'),
    path('update-landlord/', UpdateLandlordView.as_view(), name='update-landlord'),
    path('register-tenant/', RegisterTenantView.as_view(), name='register-tenant'),
    path('update-tenant/', UpdateTenantView.as_view(), name='update-tenant'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),

    path('get-tenant/<int:pk>/', GetTenantView.as_view(), name='get-tenant'),
    path('get-landlord/<int:pk>/', GetLandlordView.as_view(), name='get-landlord'),

    path('all-tenants/', ListTenantsView.as_view(), name='all-tenants'),
    path('all-landlords/', ListLandlordsView.as_view(), name='all-landlords'),

    path('lease/', LeaseView.as_view(), name='create-list-lease'),
    path('sign-lease/', SignLeaseView.as_view(), name='sign-lease'),
    path('lease/<str:lease_id>/', GetDeleteLeaseView.as_view(), name='get-delete-lease'),

    path('keycode/<str:apt_number>/', KeycodeView.as_view(), name='keycode'),

    path('create-complaint/', CreateComplaintView.as_view(), name='create-complaint'),
    path('complaints/', ComplaintListView.as_view(), name='complaints'),

    path('create-parking/', CreateParkingView.as_view(), name="create-parking")

]