import api from './../api';
import { LoginResponse, UserCredentials } from '../../interfaces/Auth';

export const authService = {
  async login(credentials: UserCredentials): Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>('/api/token/', credentials);
    
    if (data.access) {
      localStorage.setItem('token', data.access);
      localStorage.setItem('refresh', data.refresh);
    }
    
    return data;
  },

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
  },

  getToken(): string | null {
    return localStorage.getItem('token');
  }
};