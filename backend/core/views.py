from django.http import JsonResponse
from django.db import connection
from django.conf import settings

def health_check(request):
    """
    Verifica a saúde do sistema e a conexão com o banco de dados. ola!
    """
  
    db_ok = True
    db_message = "Conexão com o Supabase está OK!"
    
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
    except Exception as e:
        db_ok = False
        db_message = f"Erro ao conectar no banco: {str(e)}"

    return JsonResponse({
        "status": "online",
        "database": {
            "connected": db_ok,
            "message": db_message
        },
        "environment": {
            "debug_mode": settings.DEBUG,
            "allowed_hosts": settings.ALLOWED_HOSTS
        }
    })