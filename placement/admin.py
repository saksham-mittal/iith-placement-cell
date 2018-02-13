from django.contrib import admin
from .models import Announcement

# Register your models here.

class AnnouncementAdmin(admin.ModelAdmin):
    fields = ['announcement_title', 'announcement_text', 'mailing_list', 'created_date', 'send_mail_too']
    search_fields = ["announcement_title"]
    list_filter = ['created_date']

admin.site.register(Announcement, AnnouncementAdmin)
