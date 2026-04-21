from django.core.management.base import BaseCommand
from insfrastructure.factories import OrganizationFactory, ProjectFactory, TaskFactory
from django.db import transaction


class Command(BaseCommand):
    help = 'Popula o banco de dados com dados iniciais para desenvolvimento'

    def handle(self, *args, **options):
        self.stdout.write('Semeando dados...')

        try:
            with transaction.atomic():
                # Cria 3 organizações, cada uma com seu dono (User)
                for _ in range(3):
                    org = OrganizationFactory()

                    # Para cada org, cria 2 projetos
                    for _ in range(2):
                        project = ProjectFactory(organization=org)

                        # Para cada projeto, cria 5 tarefas
                        TaskFactory.create_batch(5, project=project)

                self.stdout.write(self.style.SUCCESS('Dados semeados com sucesso!'))
        except Exception as e:
            self.stdout.write(self.style.ERROR(f'Erro ao semear: {e}'))