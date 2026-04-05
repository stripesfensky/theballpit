from django.db import models

class Brand(models.Model):
  name = models.CharField

class Location(models.Model):
  street = models.CharField
  city = models.CharField
  stateprovince = models.CharField
  country = models.CharField
  latitude = models.DecimalField(max_digits = 9, decimal_places = 6, blank = True)
  longitude = models.DecimalField(max_digits = 9, decimal_places = 6, blank = True)
  opening_date = models.DateField(blank = True)
  closing_date = models.DateField(blank = True)
  cancelled = models.BooleanField(default = False)
  sqft = models.IntegerField(blank = True)

class LocationBranding(models.Model):
  location = models.ForeignKey(Location, on_delete = models.CASCADE, related_name = 'branding')
  brand = models.ForeignKey(Brand, on_delete = models.RESTRICT)
  start_date = models.DateField()
  end_date = models.DateField(blank = True)

class Initiative(models.Model):
  name = models.CharField

class LocationInitiative(models.Model):
  location = models.ForeignKey(Location, on_delete = models.CASCADE, related_name = 'initiatives')
  initiative = models.ForeignKey(Initiative, on_delete = models.RESTRICT)
  debut = models.DateField(blank = True)

class Manufacturer(models.Model):
  name = models.CharField

class Character(models.Model):
  name = models.CharField()
  brands = models.ManyToManyField(Brand, related_name = 'characters')
