from list.models import List
from list.app.serializers import ListSerializer
from rest_framework import viewsets

class ListViewSet(viewsets.ModelViewSet):
    serializer_class = ListSerializer
    queryset = List.objects.all()