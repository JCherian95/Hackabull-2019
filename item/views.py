from django.shortcuts import render
from django.http import JsonResponse
from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
import os

def item_list(request):
	context = {
		'name': 'Water',
		'quantity': 25,
		'lat': 28.068908,
        'long': -82.428225
	}
	return JsonResponse(context)


def home(request):
	return render(request, "item/index.html", {})

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