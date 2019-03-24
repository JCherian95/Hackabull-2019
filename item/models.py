from django.db import models

# Create your models here.

class EssentialItem(models.Model):
	name = models.CharField(max_length=120)
	quantity = models.IntegerField()
	location = models.TextField()

	def __str__(self):
		return self.name