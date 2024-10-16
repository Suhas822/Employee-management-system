from django.contrib import admin
from django.urls import path
from .views import EmployeeListCreateView,DepartmentListCreateView
urlpatterns = [
   path('employees/', EmployeeListCreateView.as_view(), name='employee-list-create'),
   path('departments/', DepartmentListCreateView.as_view(), name='department-list-create'),
   
  

]
