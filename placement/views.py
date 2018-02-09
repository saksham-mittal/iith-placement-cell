from django.shortcuts import render
from .models import Announcement
from django.utils import timezone

# Create your views here.
def index(request):
    return render(request, 'placement/index.html', {})

def announcements(request):
    announcements = Announcement.objects.filter(created_date__lte=timezone.now()).order_by('created_date')
    return render(request, 'placement/announcements.html', {'announcements' : announcements})
