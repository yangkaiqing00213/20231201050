"""
Views for mysite project.
"""

from django.shortcuts import render


def single_page_app(request):
    """Render the single page application."""
    return render(request, 'singlepage.html')


def blog_page(request):
    """Render the blog page."""
    return render(request, 'blog.html')