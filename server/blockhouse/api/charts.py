# todo/todo_api/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.renderers import JSONRenderer

class BarChartApiView(APIView):
    renderer_classes = [JSONRenderer]
    
    def get(self, requests):
        data = {"labels": ["Product A", "Product B", "Product C"],"datasets": [{"data": [100, 150, 200],}]}
        return Response(data,status=status.HTTP_200_OK)

