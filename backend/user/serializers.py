from rest_framework import serializers
from django.contrib.auth.models import User

# UserSerializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','email','date_joined')

