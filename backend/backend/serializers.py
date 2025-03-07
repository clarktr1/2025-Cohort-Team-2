from rest_framework import serializers
from .models import *

class LeaseSerializer(serializers.ModelSerializer):
  class Meta:
    model = Lease
    fields = '__all__'