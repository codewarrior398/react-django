from .serializers import UserSerializer, User
from rest_framework.viewsets import ModelViewSet
# Create your views here.
# UserView
class UserView(ModelViewSet):
    serializer_class = UserSerializer()
    queryset = User.objects.all()
