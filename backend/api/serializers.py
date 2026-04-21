from rest_framework import serializers
from domain.models import Organization

class OrganizationSerializer(serializers.ModelSerializer):
    # Campo extra para mostrar o nome do dono, facilitando para o Frontend
    owner_username = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Organization
        fields = ['id', 'name', 'slug', 'owner', 'owner_username']