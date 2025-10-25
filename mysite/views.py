"""
Views for mysite project.
"""

from django.shortcuts import render
from django.http import JsonResponse

# 渲染无限滚动页面
def infinite_scroll_view(request):
    return render(request, 'infinite_scroll.html')

# 处理帖子API请求，支持无限滚动
def posts_api(request):
    # 获取请求参数
    start = int(request.GET.get('start', 1))
    end = int(request.GET.get('end', 20))
    
    # 生成帖子数据
    posts = [f"Post #{i}" for i in range(start, end + 1)]
    
    # 返回JSON响应
    return JsonResponse({'posts': posts})


def single_page_app(request):
    """Render the single page application."""
    return render(request, 'singlepage.html')


def blog_page(request):
    """Render the blog page."""
    return render(request, 'blog.html')