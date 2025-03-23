from django.contrib import admin
from .models import CustomUser, Tenant, Landlord, Apartment, Lease

# Register your models here.

admin.site.register(CustomUser)
admin.site.register(Tenant)
admin.site.register(Landlord)
admin.site.register(Apartment)
admin.site.register(Lease)
