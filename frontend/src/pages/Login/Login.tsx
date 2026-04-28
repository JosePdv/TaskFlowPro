import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
// @ts-ignore: allow importing CSS without explicit module declaration
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login, loading, error } = useAuth();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) return;

    await login({ username, password });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleFormSubmit} className="login-card">
        <h1>Bem-vindo!</h1>
        {error && <span className="error-badge">{error}</span>}
        
        <input 
          type="text" 
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={loading}
          autoComplete="username"
          required
        />
        
        <input 
          type="password" 
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          autoComplete="current-password"
          required
        />
        
        <button type="submit" disabled={loading}>
          {loading ? 'Validando...' : 'Acessar Sistema'}
        </button>
      </form>
    </div>
  );
};

export default Login;