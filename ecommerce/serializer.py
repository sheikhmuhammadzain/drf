from rest_framework import serializers
from .models import Student, Assignment

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = ['id', 'title', 'description', 'due_date', 'student', 'created_at']

class StudentSerializer(serializers.ModelSerializer):
    assignments = AssignmentSerializer(many=True, read_only=True)

    class Meta:
        model = Student
        fields = ['id', 'name', 'email', 'created_at', 'assignments']