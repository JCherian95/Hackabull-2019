from django.shortcuts import redirect
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import generic
from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
import os 

def index(request):
    return render(request, 'index.html')

def db(request):
    return render(request, '../db.json')

class ReactAppView(View):
    
    def get(self, request):
        try:

            with open(os.path.join(settings.REACT_APP, 'build', 'index.html')) as file:
                return HttpResponse(file.read())

        except :
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )
