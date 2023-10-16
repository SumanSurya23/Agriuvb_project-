# Generated by Django 2.0.4 on 2018-04-18 20:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ActivityMeta',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activity', models.CharField(choices=[('open_vent', 'Open Vent'), ('close_vent', 'Close Vent'), ('lights_on', 'Lights On'), ('lights_off', 'Lights Off'), ('start_fan', 'Start Fan'), ('stop_fan', 'Stop Fan'), ('water_crops', 'Water Crops')], max_length=20)),
                ('date_recorded', models.DateTimeField(default=django.utils.timezone.now)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='SensorData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('temperature', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('humidity', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('soil_moisture_state', models.CharField(choices=[(0, 'Wet'), (1, 'Dry')], max_length=10)),
                ('date_recorded', models.DateTimeField(verbose_name='Date Recorded')),
            ],
            options={
                'ordering': ('-date_recorded',),
            },
        ),
    ]