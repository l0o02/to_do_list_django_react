from rest_framework import serializers
from list.models import List

class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = ('id', 'to_do', 'term')