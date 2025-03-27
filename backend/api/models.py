import os
import uuid
import random

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

from .managers import CustomUserManager

# Create your models here.

class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, unique=True)

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name", "phone_number"]
    
    def __str__(self):
        return self.first_name + " " + self.last_name
    

class Tenant(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    emergency_contact = models.CharField(max_length=30, blank=True, null=True)
    emergency_email = models.EmailField(blank=True, null=True)
    emergency_phone = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return "Tenant: " + self.user.__str__()
    

class Landlord(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)

    address_line1 = models.CharField(max_length=35)
    address_line2 = models.CharField(max_length=20, blank=True)
    city = models.CharField(max_length=15)
    state = models.CharField(max_length=2)
    zipcode = models.CharField(max_length=5)

    def __str__(self):
        return "Landlord: " + self.user.__str__()
    

class Apartment(models.Model):
    apt_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    apt_number = models.CharField(max_length=5, unique=True)
    apt_type = models.CharField(max_length=15)
    available_permits = models.PositiveSmallIntegerField(default=2)
    isVacant = models.BooleanField(default=True)

    def __str__(self):
        return self.apt_number + " " + self.apt_type 
    

class Lease(models.Model):
    lease_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    landlord = models.ForeignKey(Landlord, on_delete=models.CASCADE)
    tenant = models.OneToOneField(Tenant, on_delete=models.CASCADE)
    apartment = models.OneToOneField(Apartment, on_delete=models.CASCADE)
    lease_created = models.DateTimeField(auto_now_add=True)
    lease_signed = models.DateTimeField(null=True, blank=True)
    lease_end = models.DateField()

    def __str__(self):
        return self.apartment.__str__() + " leased by " + self.tenant.__str__()
    
    def delete(self, *args, **kwargs):
        if self.apartment:
            self.apartment.isVacant = True
            self.apartment.save()
        
        super().delete(*args, **kwargs)


class Notification(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)
    message = models.CharField(max_length=150)

    def __str__(self):
        return self.user.__str__() + ": " + self.message


class Complaint(models.Model):
    complainer = models.ForeignKey(Apartment, on_delete=models.CASCADE)
    complaint_title = models.CharField(max_length=50)
    complaint_desc = models.TextField(null=True, blank=True)
    complaint_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.complainer.__str__() + ": " + self.complaint_title


class Package(models.Model):
    apartment = models.ForeignKey(Apartment, on_delete=models.CASCADE)
    delivered_time = models.DateTimeField(auto_now_add=True)
    picked_up_time  = models.DateTimeField(null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.pk:  
            self.picked_up_time = timezone.now()
        super().save(*args, **kwargs)


class Keycode(models.Model):
    apartment = models.OneToOneField(Apartment, on_delete=models.CASCADE)
    key_generated = models.DateTimeField(auto_now_add=True)
    key = models.PositiveIntegerField()

    def save(self, *args, **kwargs):
        self.key = random.randint(100000, 999999)
        super().save(*args, **kwargs)


class Parking(models.Model):
    apartment = models.ForeignKey(Apartment, on_delete=models.CASCADE)
    license_plate = models.CharField(max_length=7)
    car_model = models.CharField(max_length=15)
    created_time = models.DateField(auto_now_add=True)
    end_time = models.DateField(null=True)

    def __str__(self):
        return self.apartment.__str__() + ": " + self.car_model

    
    
