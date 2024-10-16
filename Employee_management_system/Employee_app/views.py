
# Create your views here.
from rest_framework import generics
from .models import Employee,Department
from .serializers import EmployeeSerializer,DepartmentSerializer,EmployeeDetailSerializer
from django_filters.rest_framework import DjangoFilterBackend



class DepartmentListCreateView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer



class EmployeeListCreateView(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['name', 'department']
    def get_serializer_class(self):
        if self.request.method == 'POST':
            return EmployeeSerializer  # For POST requests (creating)
        return EmployeeDetailSerializer  

    