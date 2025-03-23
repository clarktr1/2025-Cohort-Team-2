# Backend - Django and API Reference

[Django REST Framework](https://www.django-rest-framework.org/) - Helps building REST APIs that connect with frontend. 

[api](api) - App folder - Defines app-specific functionality (models, views, etc.)	

[backend](backend) - Project Folder - Manages project-wide settings and configurations

### [Permissions](api/custom_permissions.py)
Implemented custom permissions based on the user role. 

### [CustomUserManager](api/managers.py)
Created a CustomUserManager to create superusers. 

### [Models](api/models.py)

#### CustomUser:
In order to have unique email and phone number for Landlords and Tenants, a parent User model is created. Removed the username field. Added CustomUserManager to create superusers. 

#### Tenant:
Added emergency contact info. 

#### Landlord:
Added landlord address. 

#### Apartment:
Only landlord has access. 
`apt_number` and `apt_type` are required to create an apartment. 
Can get apartment by `apt_number`

#### Lease:
Has a one-to-one relationship with Tenant and Aparment and a Many-to-one relationship with Landlord. 
Requires `tenant` email, `apartment` number, and lease end date to create a lease. 

#### Complaint:
The landlord has to approve the complaint. 

#### Package (Optional):
Includes picked up time and delivered time. 

#### Keycode:
Returns a 6 digit code. 

#### Parking:
License plate must be unique. 

#### Notification:
Has a foreign key to `CustomUser` because both landlords and tenants get notifications. 

### [Serializers](api/serializers.py)
Converts Models in JSON objects

### [Urls](api/urls.py)
Includes URLs routes needed to make API requests. 

### [Utils](api/utils.py)
Includes helper functions. 

### [Views](api/views.py)
Details on the api routes and requests.

