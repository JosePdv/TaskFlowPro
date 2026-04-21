from django.urls import path
from .view import OrganizationListCreateView

urlpatterns = [
    path('organizations/', OrganizationListCreateView.as_view(), name='organization-list'),
]