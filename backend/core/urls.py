from django.contrib import admin
from django.urls import path, include
from .views import health_check

urlpatterns = [
    path('admin/', admin.site.core_admin_url if hasattr(admin.site, 'core_admin_url') else admin.site.urls),
    path('api/status/', health_check, name='health_check'),
    path('api/', include('api.urls')),
    path('', health_check),
]
