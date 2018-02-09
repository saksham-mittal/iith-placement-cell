from django.conf.urls import url
from . import views

app_name = 'placement'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^announcements/', views.announcements, name='announcements'),
]
