from django.db import models
from django.contrib.auth.models import AbstractUser

from .managers import CustomUserManager

# Create your models here.

class CustomUser(AbstractUser):
  username = None
  email = models.EmailField(unique=True)
  middle_name = models.CharField(max_length=15, blank=True)
  phone_number = models.CharField(max_length=15, unique=True)

  objects = CustomUserManager()

  USERNAME_FIELD = "email"
  REQUIRED_FIELDS = ["first_name", "last_name", "phone_number"]

  def __str__(self):
    return self.first_name + " " + self.middle_name + " " + self.last_name
  
class Tenant(models.Model):
  user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
  emergency_contact = models.CharField(max_length=30)
  emergency_email = models.EmailField()
  emergency_phone = models.CharField(max_length=15, unique=True)

  def __str__(self):
    return "Tenant: " + self.user

class Landlord(models.Model):
  user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
  address_line1 = models.CharField(max_length=35)
  address_line2 = models.CharField(max_length=20, blank=True)
  city = models.CharField(max_length=15)
  state = models.CharField(max_length=2)
  zipcode = models.CharField(max_length=5)

  def __str__(self):
    return "Landlord: " + self.user


  

