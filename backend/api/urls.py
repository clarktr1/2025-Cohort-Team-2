from django.urls import path
from .views import *

urlpatterns = [
    path('register-landlord/', register_landlord, name='register-landlord'),
    path('login-landlord/', login_landlord, name='login-landlord'),
    path('register-tenant/', register_tenant, name='register-tenant'),
    path('login-tenant/', login_tenant, name='login-tenant'),
    path('logout/', LogoutView.as_view(), name='logout'),
]