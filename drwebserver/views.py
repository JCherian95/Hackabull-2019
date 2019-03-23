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

#dashboard Logic
def dashboard(request):
    if request.user.is_authenticated:
        return render(request, 'dashboard/dashboard.html')

def profile(request):
    if not request.user.is_authenticated:
        return redirect('login')

    if request.method == 'POST':
        form = UserProfileChangeForm(request.POST, instance=request.user)
        print(form.errors)
        if form.is_valid():
            for field in form.cleaned_data:
                if form.cleaned_data[field] != getattr(request.user, field):
                    setattr(request.user, field, form.cleaned_data[field])
                    request.user.save()
                else:
                    form = UserProfileChangeForm(instance=request.user)
    else:
        form = UserProfileChangeForm(instance=request.user)
    return render(request, 'profile.html', {'form': form})
