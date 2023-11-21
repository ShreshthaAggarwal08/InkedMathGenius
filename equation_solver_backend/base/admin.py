from django.contrib import admin
from .models import CustomUser, UserProfile, HandwrittenEquation

admin.site.register([CustomUser, UserProfile, HandwrittenEquation])
