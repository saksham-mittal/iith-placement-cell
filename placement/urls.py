from django.conf.urls import url
from . import views

app_name = 'placement'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^announcements/', views.announcements, name='announcements'),
    url(r'^internships/', views.internships, name='internships'),
    url(r'^selectionProcess/', views.selectionProcess, name='selectionProcess'),
    url(r'^studentLife/', views.studentLife, name='studentLife'),
    url(r'^placementProcess/', views.placementProcess, name='placementProcess'),
    url(r'^hotelsnearIITH/', views.hotelsnearIITH, name='hotelsnearIITH'),
    url(r'^contactUs/', views.contactUs, name='contactUs'),
    url(r'^credits/', views.credits, name='credits'),
    url(r'^companies/', views.companies, name='companies'),
    url(r'^statistics/', views.statistics, name='statistics'),
]
