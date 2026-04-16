"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import health_check

urlpatterns = [
    path('admin/', admin.site.core_admin_url if hasattr(admin.site, 'core_admin_url') else admin.site.urls),
    
    # Rota para verificação que você pediu
    path('api/status/', health_check, name='health_check'),
    
    # Se você quiser que a página inicial também mostre isso por enquanto:
    path('', health_check), 
]