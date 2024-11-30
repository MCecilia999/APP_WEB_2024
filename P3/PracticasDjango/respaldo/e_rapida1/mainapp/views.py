from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request,'mainapp/index.html',{
        'title': 'Inicio',
        'content':'Soy inicio'
    })

def index(request):
    return render(request,'mainapp/about.html',{
        'title': 'Inicio',
        'content':'Soy about'
    })

def index(request):
    return render(request,'mainapp/mision.html',{
        'title': 'Inicio',
        'content':'Soy mision'
    })

def index(request):
    return render(request,'mainapp/vision.html',{
        'title': 'Inicio',
        'content':'Soy vision'
    })
