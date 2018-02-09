from django.db import models
from django.utils import timezone

# Create your models here.

class Announcement(models.Model):
    announcement_title = models.CharField(max_length=100)
    announcement_text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)

    def __str__(self):
        return self.announcement_title
