# Generated by Django 2.0.2 on 2018-02-13 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('placement', '0003_announcement_mailing_list'),
    ]

    operations = [
        migrations.AddField(
            model_name='announcement',
            name='send_it',
            field=models.BooleanField(default=False),
        ),
    ]
