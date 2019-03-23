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
    return render(request, 'index.html')
