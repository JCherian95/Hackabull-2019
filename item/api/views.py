
from .serializers import EssentialItemSerializer
from rest_framework import generics

from item.models import EssentialItem

class ItemListAPIView(generics.ListAPIView):
	lookup_field = 'pk'
	queryset = EssentialItem.objects.all()
	serializer_class = EssentialItemSerializer
