from django.test import TestCase
from django.contrib.auth.models import User
from core.models import Tenant, Manager


class TenantModelTest(TestCase):
    def test_create_tenant(self):
        user = User.objects.create_user(username='tenantuser', password='dummy_password')
        tenant = Tenant.objects.create(
            user=user,
            apartment_number='101',
            phone_number='555-1234',
        )
        self.assertEqual(tenant.user.username, 'tenantuser')
        self.assertEqual(tenant.apartment_number, '101')

class ManagerModelTest(TestCase):
    def test_create_manager(self):
        user = User.objects.create_user(username='manageruser', password='dummy_password')
        manager = Manager.objects.create(
            user=user,
            phone_number='555-9876',
            office_address='456 Manager Rd'
        )
        self.assertEqual(manager.user.username, 'manageruser')
        self.assertEqual(manager.phone_number, '555-9876')