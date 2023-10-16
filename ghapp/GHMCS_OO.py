#!/usr/bin/python
import RPi.GPIO as GPIO
from time import sleep
import Adafruit_DHT


UVB_1=6
UVB_2=13
UVB_3=19
UVB_4=26


soil_moisture = 0



dht_pin = 4


#GPIO SETUP
GPIO.setmode(GPIO.BCM)

GPIO.setup(soil_moisture, GPIO.OUT)


# RELAY 
GPIO.setup(UVB_1,GPIO.OUT)
GPIO.setup(UVB_2,GPIO.OUT)
GPIO.setup(UVB_3,GPIO.OUT)
GPIO.setup(UVB_4,GPIO.OUT)



class GreenhouseSystem(object):
	def get_soil_moisture(self):
		if GPIO.input(soil_moisture) == 0:
			state='wet'
		else:
			state='dry'
		return state

	
	def UVB_1(self, state='on'):
		if state is 'on':
			GPIO.output(UVB_1, GPIO.HIGH)
		elif state is 'off':
			GPIO.output(UVB_1, GPIO.LOW)
		else:
			GPIO.output(UVB_1, GPIO.LOW)
	def UVB_2(self, state='on'):
		if state is 'on':
			GPIO.output(UVB_2, GPIO.HIGH)
		elif state is 'off':
			GPIO.output(UVB_2, GPIO.LOW)
		else:
			GPIO.output(UVB_2, GPIO.LOW)
	def UVB_3(self, state='on'):
		if state is 'on':
			GPIO.output(UVB_3, GPIO.HIGH)
		elif state is 'off':
			GPIO.output(UVB_3, GPIO.LOW)
		else:
			GPIO.output(UVB_3, GPIO.LOW)
	def UVB_4(self, state='on'):
		if state is 'on':
			GPIO.output(UVB_4, GPIO.HIGH)
		elif state is 'off':
			GPIO.output(UVB_4, GPIO.LOW)
		else:
			GPIO.output(UVB_4, GPIO.LOW)


	def get_temperature(self):
		humidity, temperature = Adafruit_DHT.read_retry(
			sensor=Adafruit_DHT.DHT11,
			pin = dht_pin,
			retries=3
		)
		if temperature is None:
			temperature = 0
			humidity = 0
		return float(temperature)

	def get_humidity(self):
		humidity, temperature = Adafruit_DHT.read_retry(
			sensor=Adafruit_DHT.DHT11,
			pin = dht_pin,
			retries=3
		)
		
		if humidity is None:
			humidity = 0
			temperature = 0
		return float(humidity)

	

