from django.db import models
from uuid import uuid4

def upload_name (instance,filename):
    return f"{instance.id_product}-{filename}"


class Product (models.Model):
    id_product = models.UUIDField(
                                  primary_key = True,
                                  default     = uuid4,
                                  editable    = False
                                  )
    title_product = models.CharField(
                                      max_length=255   
                                    )
    
    describe_product = models.CharField(
                                        max_length=255   
                                        )
    
    image_product = models.ImageField(upload_to=upload_name)

    creat_at = models.DateField(auto_now_add=True)

    price_product = models.FloatField()


    def __str__(self) -> str:
        str_return_class = f'Product name : {self.title_product} and description : {self.describe_product}'
        return str_return_class

class Historic (models.Model):
    id_user = models.CharField(        
                                      max_length=255   
                                    )
    price_historic  =  models.FloatField()

    date_historic= models.DateField(auto_now_add=True)
    
    products_historic = models.JSONField()

    quantity = models.IntegerField()




'''
Os produtos deverão ser publicados com uma foto, descrição e preço, 
sendo que apenas o seu amigo poderá publicar produtos.

'''
