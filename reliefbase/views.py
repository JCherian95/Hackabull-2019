from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import UserChangeForm
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.shortcuts import redirect
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import generic

def index(request):
    if request.user.is_authenticated:
        if request.user.is_superuser:
            #client = nexmo.Client(application_id=getattr(settings, "NEXMO_APPLICATION_ID"), \
            #private_key=getattr(settings, "NEXMO_PRIVATE_KEY"))
            #calls = client.get_calls().get("_embedded")
            #calls = calls.get("calls")
            #calls = Call.objects.all().order_by("-timestamp")
            print("Hello")
        else:
            print("Goodbye")

    return render(request, 'index.html')
