from django.db import models
import uuid


class UserInfo(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    uuid = models.UUIDField(default=uuid.uuid4(), editable=False, unique=True)
    email = models.EmailField(unique=True)
    bio = models.TextField()


