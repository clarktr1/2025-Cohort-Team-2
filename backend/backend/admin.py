from django.contrib import admin
from .models import *

admin.site.register(Manager)
admin.site.register(Tenant)
admin.site.register(Lease)
