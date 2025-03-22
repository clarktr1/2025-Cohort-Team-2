from django.contrib import admin
from .models import CustomUser, Tenant, Landlord, Apartment, Lease, Notification, Complaint, Package, Keycode, Parking

# Register your models here.

admin.site.register(CustomUser)
admin.site.register(Tenant)
admin.site.register(Landlord)
admin.site.register(Apartment)
admin.site.register(Lease)
admin.site.register(Complaint)
admin.site.register(Package)
admin.site.register(Keycode)
admin.site.register(Parking)
admin.site.register(Notification)
