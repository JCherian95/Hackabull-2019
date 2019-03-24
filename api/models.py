from django.db import models

# Create your models here.
class Item(models.Model):
    id = models.IntegerField(unique=True)
    name = models.CharField(max_length=128, null=False, blank=False, unique=True)
    quantity = models.IntegerField(max_length=None, blank=False)
