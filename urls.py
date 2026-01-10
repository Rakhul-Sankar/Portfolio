# mywebsite/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.raja, name='raja'),  # empty path serves raja.html
]
