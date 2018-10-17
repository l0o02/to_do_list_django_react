from django.db import models

class List(models.Model):
    to_do = models.CharField(max_length=80)
    term = models.DateTimeField('date published')

    def __str__(self):
        return self.to_do
