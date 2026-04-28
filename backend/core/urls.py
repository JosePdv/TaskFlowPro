from django.contrib import admin
from django.urls import path, include
from .views import health_check
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # path('admin/', admin.site.core_admin_url if hasattr(admin.site, 'core_admin_url') else admin.site.urls),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/status/', health_check, name='health_check'),
    path('api/', include('api.urls')),
    path('', health_check),
]
