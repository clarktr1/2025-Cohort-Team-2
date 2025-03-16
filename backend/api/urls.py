from django.urls import path

from .views import RegisterLandlordView, RegisterTenantView, UpdateLandlordView, UpdateTenantView, LoginView, LogoutView

urlpatterns = [
    path('register-landlord/', RegisterLandlordView.as_view(), name='register-landlord'),
    path('update-landlord/', UpdateLandlordView.as_view(), name='update-landlord'),
    path('register-tenant/', RegisterTenantView.as_view(), name='register-tenant'),
    path('update-tenant/', UpdateTenantView.as_view(), name='update-tenant'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
]