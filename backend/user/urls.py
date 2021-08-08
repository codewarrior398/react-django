from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserView

router = DefaultRouter()
router.register("users", UserView)



urlpatterns = [
    path('',include(router.urls)),
]
