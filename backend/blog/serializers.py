from rest_framework import serializers
from .models import Category,Blog,BlogComment
from user.serializers import UserSerializer

# CategorySerializer
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category()
        fields = '__all__'


# BlogSerializer
class BlogSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many = True)
    author = UserSerializer(read_only = True)
    author_id = serializers.IntegerField(write_only=True)
    comment_count = serializers.SerializerMethodField("get_comment_count")
    class Meta:
        model = Blog
        fields = '__all__'
    def get_comment_count(self, obj):
        return obj.blog_comments.count()
# BlogCommentSerializer
class BlogCommentSerializer(serializers.ModelSerializer):
    blog = BlogSerializer(read_only = True)
    blog_id = serializers.IntegerField(write_only= True)
    class Meta:
        model = BlogComment
        fields = '__all__'