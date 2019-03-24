from rest_framework import serializers

from item.models import EssentialItem

class EssentialItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = EssentialItem
        fields = ('id', 'name', 'quantity', 'lat', 'long')
        read_only_fields = ['id','name', 'quantity']