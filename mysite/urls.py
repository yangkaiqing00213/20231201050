"""
URL configuration for mysite project.
"""

from django.contrib import admin
from django.urls import path
from .views import infinite_scroll_view, posts_api
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', infinite_scroll_view, name='infinite_scroll'),
    path('posts', posts_api, name='posts_api'),
]

# 添加静态文件服务配置
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)