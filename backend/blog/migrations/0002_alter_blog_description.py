# Generated by Django 3.2.5 on 2021-07-31 12:50

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='description',
            field=tinymce.models.HTMLField(),
        ),
    ]
