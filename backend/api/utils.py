from .models import Apartment, Lease, Tenant, Landlord, CustomUser

def get_apartment_from_tenant(email):
    try:
        tenant = Tenant.objects.get(user=CustomUser.objects.get(email=email))
    except Tenant.DoesNotExist:
        return None
    
    try:
        lease = Lease.objects.get(tenant = tenant)
        return lease.apartment
    except Lease.DoesNotExist:
        return None

