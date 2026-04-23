from rest_framework import serializers
from domain.models import Organization

class OrganizationSerializer(serializers.ModelSerializer):

    owner_username = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Organization
        fields = ['id', 'name', 'slug', 'owner', 'owner_username']