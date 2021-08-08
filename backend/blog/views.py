from django.shortcuts import render
from .serializers import CategorySerializer, BlogSerializer,Category,Blog,BlogComment, BlogCommentSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from django.db.models import Count,Q
class PaginationInterface(PageNumberPagination):
    page_size = 20
# Create your views here.
# CategoryView
class CategoryView(ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

# BlogView
class BlogView(ModelViewSet):
    serializer_class = BlogSerializer
    pagination_class = PaginationInterface
    queryset = Blog.objects.all()
    lookup_field = "slug"
    

    def get_queryset(self):
        query = self.request.query_params.dict()
        keyword = query.get("Keyword",None)
        qurey_data = self.queryset
        if keyword:
            query_data =qurey_data.filter(
                Q(title__icontains=keyword) |
                Q(title_iexact=keyword) |
                Q(categories_title_icontain= keyword) |
                Q(categories_title_iexact=keyword)
            )
        return qurey_data
    
# BlogView
class BlogCommentView(ModelViewSet):
    serializer_class = BlogCommentSerializer
    queryset = BlogComment.objects.all()

    def get_queryset(self):
        query = self.request.query_params.dict()
        return self.queryset.filter(**query)
    

# TopBlogs
class TopBlogs(ListAPIView):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()

    def get_queryset(self):
        blogs = self.queryset.annotate(comment_count=Count("blog_comments")).order_by("-comment_count")[:5]
        return blogs

# SimilarBlog
class SimilarBlogs(ListAPIView):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()

    def get_queryset(self):
        blog_id = self.kwargs.get("blog_id")
        try:
            blog_categories  = self.queryset.get(id = blog_id).category.all()
        except Exception:
            return []
        blogs = self.queryset.filter(category__id__in=[category.id for category in blog_categories]).exclude(id=blog_id)
        return blogs
        

    
    
