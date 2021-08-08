from django.urls import path, include
from rest_framework import routers
from .views import CategoryView, BlogView, BlogCommentView,TopBlogs, SimilarBlogs
from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register("category", CategoryView)
router.register("blog", BlogView)
router.register("comments", BlogCommentView)



urlpatterns = [
    path('',include(router.urls)),
    path('top-blogs/', TopBlogs.as_view()),
    path('similar-blogs/<int:blog_id>', SimilarBlogs.as_view()),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)