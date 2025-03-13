# Backend - Django 

[Django REST Framework](https://www.django-rest-framework.org/) - Helps building REST APIs that connect with frontend. 

[api](api) - App folder - Defines app-specific functionality (models, views, etc.)	

[backend](backend) - Project Folder - Manages project-wide settings and configurations

### [CustomUserManager](api/managers.py)
Created a CustomUserManager to create superusers. 

### [Models](api/models.py)

#### CustomUser:
In order to have unique email and phone number for Landlords and Tenants, a parent User model is created. Removed the username field. Added CustomUserManager to create superusers. 

#### Tenant:
Added emergency contact info. 

#### Landlord:
Added landlord address. 