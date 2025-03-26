from django.test import TestCase
from django.utils import timezone
from api.models import (
    CustomUser, Tenant, Landlord, Apartment, Lease,
    Notification, Complaint, Package, Keycode, Parking
)


class CustomUserModelTest(TestCase):
    def test_create_custom_user(self):
        user = CustomUser.objects.create_user(
            first_name='John',
            last_name='Doe',
            email='john.doe@example.com',
            phone_number='555-1234',
            password='dummy_password'
        )
        self.assertEqual(user.email, 'john.doe@example.com')
        self.assertEqual(user.phone_number, '555-1234')
        self.assertTrue(user.check_password('dummy_password'))


class TenantModelTest(TestCase):
    def test_create_tenant(self):
        user = CustomUser.objects.create_user(
            first_name='Alice',
            last_name='Smith',
            email='alice.smith@example.com',
            phone_number='555-5678',
            password='dummy_password'
        )
        tenant = Tenant.objects.create(
            user=user,
            emergency_contact='Bob Smith',
            emergency_email='bob.smith@example.com',
            emergency_phone='555-9876',
        )
        self.assertEqual(tenant.user.email, 'alice.smith@example.com')
        self.assertEqual(tenant.emergency_contact, 'Bob Smith')


class LandlordModelTest(TestCase):
    def test_create_landlord(self):
        user = CustomUser.objects.create_user(
            first_name='Tom',
            last_name='Williams',
            email='tom.williams@example.com',
            phone_number='555-4321',
            password='dummy_password'
        )
        landlord = Landlord.objects.create(
            user=user,
            address_line1='123 Main St',
            address_line2='Apt 4B',
            city='Metropolis',
            state='NY',
            zipcode='10001'
        )
        self.assertEqual(landlord.user.email, 'tom.williams@example.com')
        self.assertEqual(landlord.city, 'Metropolis')


class ApartmentModelTest(TestCase):
    def test_create_apartment(self):
        apartment = Apartment.objects.create(
            apt_number='101',
            apt_type='2BHK',
            available_permits=2,
            isVacant=True
        )
        self.assertEqual(apartment.apt_number, '101')
        self.assertEqual(apartment.apt_type, '2BHK')
        self.assertTrue(apartment.isVacant)


class LeaseModelTest(TestCase):
    def setUp(self):
        self.user = CustomUser.objects.create_user(
            first_name='Jack',
            last_name='Brown',
            email='jack.brown@example.com',
            phone_number='555-3456',
            password='dummy_password'
        )
        self.tenant = Tenant.objects.create(user=self.user)
        self.landlord_user = CustomUser.objects.create_user(
            first_name='Sam',
            last_name='White',
            email='sam.white@example.com',
            phone_number='555-6789',
            password='dummy_password'
        )
        self.landlord = Landlord.objects.create(
            user=self.landlord_user,
            address_line1='789 Elm St',
            city='Gotham',
            state='NY',
            zipcode='10002'
        )
        self.apartment = Apartment.objects.create(
            apt_number='202',
            apt_type='3BHK',
            available_permits=1,
            isVacant=True
        )

    def test_create_lease(self):
        lease = Lease.objects.create(
            landlord=self.landlord,
            tenant=self.tenant,
            apartment=self.apartment,
            lease_signed=timezone.now(),
            lease_end=timezone.now().date()
        )
        self.assertEqual(lease.apartment.apt_number, '202')
        self.assertEqual(str(lease), f"{self.apartment} leased by {self.tenant}")


class NotificationModelTest(TestCase):
    def test_create_notification(self):
        user = CustomUser.objects.create_user(
            first_name='Eve',
            last_name='Jones',
            email='eve.jones@example.com',
            phone_number='555-0000',
            password='dummy_password'
        )
        notification = Notification.objects.create(
            user=user,
            message='Your rent is due!'
        )
        self.assertEqual(notification.user.email, 'eve.jones@example.com')
        self.assertEqual(notification.message, 'Your rent is due!')


class ComplaintModelTest(TestCase):
    def setUp(self):
        self.user = CustomUser.objects.create_user(
            first_name='Chris',
            last_name='Evans',
            email='chris.evans@example.com',
            phone_number='555-9999',
            password='dummy_password'
        )
        self.tenant = Tenant.objects.create(user=self.user)
        self.apartment = Apartment.objects.create(
            apt_number='303',
            apt_type='Studio'
        )
        self.landlord = Landlord.objects.create(
            user=self.user,
            address_line1='456 Pine St',
            city='Star City',
            state='CA',
            zipcode='90001'
        )

    def test_create_complaint(self):
        complaint = Complaint.objects.create(
            apartment=self.apartment,
            landlord=self.landlord,
            tenant=self.tenant,
            complaint_title='Leaking Roof',
            complaint_desc='Water is leaking from the roof when it rains.'
        )
        self.assertEqual(complaint.complaint_title, 'Leaking Roof')
        self.assertEqual(complaint.complaint_desc, 'Water is leaking from the roof when it rains.')


class PackageModelTest(TestCase):
    def test_create_package(self):
        apartment = Apartment.objects.create(
            apt_number='404',
            apt_type='1BHK'
        )
        package = Package.objects.create(
            apartment=apartment
        )
        self.assertIsNotNone(package.delivered_time)
        self.assertIsNone(package.picked_up_time)


class KeycodeModelTest(TestCase):
    def test_create_keycode(self):
        apartment = Apartment.objects.create(
            apt_number='505',
            apt_type='3BHK'
        )
        keycode = Keycode.objects.create(
            apartment=apartment
        )
        self.assertIsNotNone(keycode.key_generated)
        self.assertTrue(100000 <= keycode.key <= 999999)


class ParkingModelTest(TestCase):
    def test_create_parking(self):
        apartment = Apartment.objects.create(
            apt_number='606',
            apt_type='Penthouse'
        )
        parking = Parking.objects.create(
            apartment=apartment,
            license_plate='ABC1234',
            car_model='Tesla Model X',
            end_time=timezone.now().date()
        )
        self.assertEqual(parking.license_plate, 'ABC1234')
        self.assertEqual(parking.car_model, 'Tesla Model X')
