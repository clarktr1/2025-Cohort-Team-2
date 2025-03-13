from django.contrib import admin
from .models import CustomUser, Tenant, Landlord

# Register your models here.

admin.site.register(CustomUser)
admin.site.register(Tenant)
admin.site.register(Landlord)
