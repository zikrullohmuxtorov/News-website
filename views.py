from django.shortcuts import render
from django.http import HttpResponse
from requests import api

# Create your views here.

def home(request):
	import requests
	import json

	news_api_request = requests.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cf1b1999d88e4354823484e3b3a77a99")
	api = json.loads(news_api_request.content)

	return render(request, 'home.html', {'api': api})