from app import models
from rest_framework import viewsets
from app.api import serializer
 
class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = serializer.ProductSerializer
    queryset = models.Product.objects.all()


class HistoricViewSet(viewsets.ModelViewSet):
    serializer_class = serializer.HistoricSerializer
    queryset = models.Historic.objects.all()
    