# Generated by Django 2.0.2 on 2018-02-09 23:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('placement', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='announcement',
            old_name='annoucement_title',
            new_name='announcement_title',
        ),
    ]
