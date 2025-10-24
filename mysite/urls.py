"""
URL configuration for mysite project.
"""

from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.single_page_app, name='single_page_app'),
    path('singlepage/', views.single_page_app, name='single_page_app'),
    path('blog/', views.blog_page, name='blog_page'),
]