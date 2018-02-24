from django.shortcuts import render
from .models import Announcement
from django.utils import timezone

# Create your views here.
def index(request):
    return render(request, 'placement/index.html', {})

def announcements(request):
    announcements = Announcement.objects.filter(created_date__lte=timezone.now()).order_by('created_date').reverse()
    return render(request, 'placement/announcements.html', {'announcements' : announcements})

def internships(request):
    return render(request, 'placement/internships.html', {})

def selectionProcess(request):
    return render(request, 'placement/selectionProcess.html', {})

def studentLife(request):
    return render(request, 'placement/studentLife.html', {})

def companies(request):
    return render(request, 'placement/companies.html', {})

def placementProcess(request):
    return render(request, 'placement/placementProcess.html', {})

def statistics(request):
    return render(request, 'placement/statistics.html', {})

def hotelsnearIITH(request):
    return render(request, 'placement/hotelsnearIITH.html', {})

def contactUs(request):
    return render(request, 'placement/contactUs.html', {})

def credits(request):
    return render(request, 'placement/credits.html', {})
