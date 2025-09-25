from rest_framework import serializers
from .models import Home, Posts, Projects, Donations, Volunteer, OurContact
from django.contrib.auth.models import User

class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        fields = '__all__'

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = '__all__'

class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'

class DonationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donations
        fields = '__all__'

class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = '__all__'

class OurContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurContact
        fields = '__all__'



class RegisterSerializer(serializers.ModelSerializer):
    # Password field write_only so it won't be returned in API responses
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password']

    def create(self, validated_data):
        # Using Django's create_user method which:
        # - creates a new user instance
        # - automatically hashes the password before saving
        # This is why we don't explicitly hash the password here.
        return User.objects.create_user(**validated_data)

