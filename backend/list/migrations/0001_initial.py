# Generated by Django 2.1.2 on 2018-10-17 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='List',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('to_do', models.CharField(max_length=80)),
                ('term', models.DateTimeField(verbose_name='date published')),
            ],
        ),
    ]
