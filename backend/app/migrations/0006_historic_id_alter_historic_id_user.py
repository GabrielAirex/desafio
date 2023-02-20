# Generated by Django 4.1.7 on 2023-02-20 00:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0005_remove_historic_id_alter_historic_id_user"),
    ]

    operations = [
        migrations.AddField(
            model_name="historic",
            name="id",
            field=models.BigAutoField(
                auto_created=True,
                default=0,
                primary_key=True,
                serialize=False,
                verbose_name="ID",
            ),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name="historic",
            name="id_user",
            field=models.CharField(max_length=255),
        ),
    ]