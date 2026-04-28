import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/Auth/auth';
import { UserCredentials } from '../interfaces/Auth';

interface UseAuthReturn {
  login: (credentials: UserCredentials) => Promise<void>;
  loading: boolean;
  error: string | null;
}

export function useAuth(): UseAuthReturn {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (credentials: UserCredentials) => {
    setLoading(true);
    setError(null);
    try {
      await authService.login(credentials);
      navigate('/home');
    } catch (err: any) {
      setError('Credenciais inválidas ou erro na conexão.');
      console.error('Auth Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}