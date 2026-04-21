from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from domain.models import Organization
from .serializers import OrganizationSerializer
from django.contrib.auth.models import User


class OrganizationListCreateView(generics.ListCreateAPIView):
    serializer_class = OrganizationSerializer
    #permission_classes = [IsAuthenticated]  # Garante que só usuários logados acessam

    def get_queryset(self):
        # Filtra para retornar apenas as organizações onde o usuário logado é o dono
        #return Organization.objects.filter(owner=self.request.user)
        return Organization.objects.all()

    def perform_create(self, serializer):
        # Ao criar uma organização, o Django salva automaticamente o usuário logado como dono
        serializer.save(owner=self.request.user)