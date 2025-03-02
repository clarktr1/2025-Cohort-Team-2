from django.db import models
from django.contrib.auth.models import User

class Manager(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    office_address = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.user.get_full_name() or self.user.username
    
class Tenant(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    apartment_number = models.CharField(max_length=10)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    emergency_contact = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.user.get_full_name() or self.user.username

