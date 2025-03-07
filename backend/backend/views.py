from rest_framework import viewsets
from .models import *
from .serializers import *

class LeaseViewSet(viewsets.ModelViewSet):
  queryset = Lease.objects.all()
  serializer_class = LeaseSerializer