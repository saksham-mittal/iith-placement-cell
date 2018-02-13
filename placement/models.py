from django.db import models
from django.utils import timezone

from django.db.models import signals
from django.core.mail import send_mail
from django.conf import settings

# Create your models here.

class Announcement(models.Model):
    announcement_title = models.CharField(max_length=100)
    announcement_text = models.TextField()

    mailing_list = models.CharField(max_length=100, blank=True)
    send_mail_too = models.BooleanField(default=False) #check it if you want to send your email

    created_date = models.DateTimeField(
            default=timezone.now)

    def save(self, *args, **kwargs):
        if self.send_mail_too:
           subject = self.announcement_title
           from_email = settings.EMAIL_HOST_USER
           to_email = self.mailing_list.split()
           msg = self.announcement_text + """

Regards,
IITH PLACEMENT CELL
           """
           send_mail(subject=subject, from_email=from_email, recipient_list=to_email, message=msg, fail_silently=False)
        super(Announcement, self).save(*args, **kwargs) # Call the "real" save() method.

    def __str__(self):
        return self.announcement_title
