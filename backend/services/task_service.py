from domain.models import Project
from domain.models import Task


class TaskService:
    @staticmethod
    def create_task_for_organization(org_id, project_id, data):
        # Aqui entra a regra de negócio pura (Domain)
        # Ex: Verificar se a Org atingiu limite de tarefas (SaaS)
        project = Project.objects.get(id=project_id, organization_id=org_id)
        return Task.objects.create(project=project, **data)