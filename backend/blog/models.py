from django.db import models
from django.utils.text import slugify
from django.contrib.auth.models import User
from tinymce import models as tinymce_models

# Category Model
class Category(models.Model):
    name = models.CharField(max_length=255,db_index=True)
    class Meta:
        verbose_name_plural = 'categories'
    
    def __str__(self):
        return self.name


# Blog Model
class Blog(models.Model):
    category = models.ManyToManyField(Category, related_name='blog_category')
    title = models.CharField(max_length=255, unique=True)
    description = tinymce_models.HTMLField()
    slug = models.SlugField(max_length=255, editable=False , default='')
    image = models.ImageField(upload_to='images',null = True, blank = True)
    author = models.ForeignKey(User,related_name="blog_author", on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name_plural = 'blogs'
        ordering = ('-created',)
    def __str__(self):
        return f"{self.title}-{self.author.username}"

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title, allow_unicode = True)
        super().save(*args, **kwargs)

# BlogComment Model
class BlogComment(models.Model):
    blog = models.ForeignKey( Blog,  related_name = "blog_comments" , on_delete=models.CASCADE)
    name = models.CharField( default= "Annoymous",max_length=50)
    ip = models.CharField(null=True, blank = True, max_length=50)
    comment = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name_plural = 'comments'
        ordering = ('-created',)
    def __str__(self):
        return f"{self.blog.title}-{self.name}"
