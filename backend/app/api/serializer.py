from rest_framework import serializers
from app import models 



class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = '__all__'

class HistoricSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Historic
        fields = '__all__'