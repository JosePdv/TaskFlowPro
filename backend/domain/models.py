from django.db import models
from django.contrib.auth.models import User

class Organization(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

class Project(models.Model):
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name='projects')
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

class Task(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='tasks')
    title = models.CharField(max_length=200)
    status = models.CharField(max_length=20, default='todo')
    assigned_to = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)