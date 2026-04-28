# o api/urls.py (equivalente ao routes/api.php).
from django.urls import path
from .view import OrganizationListCreateView

urlpatterns = [

    path('organizations/', OrganizationListCreateView.as_view(), name='organization-list'),
]
