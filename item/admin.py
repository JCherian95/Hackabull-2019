from django.contrib import admin

# Register your models here.

from .models import EssentialItem

admin.site.register(EssentialItem)