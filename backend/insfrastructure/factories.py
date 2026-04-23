import factory
from django.contrib.auth.models import User
from domain.models import Organization, Project, Task


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = User

    username = factory.Faker('user_name')
    email = factory.Faker('email')


class OrganizationFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Organization

    name = factory.Faker('company')
    slug = factory.Faker('slug')
    owner = factory.SubFactory(UserFactory)


class ProjectFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Project

    organization = factory.SubFactory(OrganizationFactory)
    name = factory.Faker('catch_phrase')
    description = factory.Faker('paragraph')


class TaskFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Task

    project = factory.SubFactory(ProjectFactory)
    title = factory.Faker('sentence', nb_words=4)
    status = factory.Iterator(['todo', 'doing', 'done'])
    assigned_to = factory.SubFactory(UserFactory)
