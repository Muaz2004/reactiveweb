from rest_framework import viewsets
from .models import Home, Posts, Projects, Donations, Volunteer, OurContact
from .serializers import HomeSerializer, PostsSerializer, ProjectsSerializer, DonationsSerializer, VolunteerSerializer, OurContactSerializer,RegisterSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny


from rest_framework.pagination import PageNumberPagination

class CustomPagination(PageNumberPagination):
    page_size = 5


class HomeViewSet(viewsets.ModelViewSet):
    queryset=Home.objects.all()
    serializer_class=HomeSerializer
    permission_classes = [AllowAny]

class PostsViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer

class ProjectsViewSet(viewsets.ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
    pagination_class = CustomPagination
    
class DonationsViewSet(viewsets.ModelViewSet):
    queryset = Donations.objects.all()
    serializer_class = DonationsSerializer
    pagination_class = CustomPagination


class VolunteerViewSet(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer
    pagination_class = CustomPagination

class OurContactViewSet(viewsets.ModelViewSet):
    queryset = OurContact.objects.all()
    serializer_class = OurContactSerializer

class RegisterViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=RegisterSerializer
    permission_classes = [AllowAny]  # allow anyone to create users

    # limit actions to only create, disable list, update, delete etc
    http_method_names = ['post', 'head', 'options']

