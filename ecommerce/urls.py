from django.urls import path
from .views import (
    StudentListCreateView, 
    StudentRetrieveUpdateDestroyView,
    AssignmentListCreateView,
    AssignmentRetrieveUpdateDestroyView
)

urlpatterns = [
    # Student URLs
    path('students/', StudentListCreateView.as_view(), name='student-list-create'),
    path('students/<int:pk>/', StudentRetrieveUpdateDestroyView.as_view(), name='student-detail'),
    
    # Assignment URLs
    path('assignments/', AssignmentListCreateView.as_view(), name='assignment-list-create'),
    path('assignments/<int:pk>/', AssignmentRetrieveUpdateDestroyView.as_view(), name='assignment-detail'),
]
