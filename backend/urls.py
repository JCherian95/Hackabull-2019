from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url, include
from django.contrib import admin

from item.api.views import ItemListAPIView
from item.views import item_list, home
from item import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^home/', home),
    url(r'^$', item_list),
    url(r'^api/', ItemListAPIView.as_view()),
    url(r'^', views.ReactAppView.as_view()),

]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
