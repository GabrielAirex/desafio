# Generated by Django 4.1.7 on 2023-02-20 00:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0004_historic"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="historic",
            name="id",
        ),
        migrations.AlterField(
            model_name="historic",
            name="id_user",
            field=models.CharField(max_length=255, primary_key=True, serialize=False),
        ),
    ]