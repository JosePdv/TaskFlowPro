// src/pages/VerifyConnection/VerifyConnection.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api.js';
import './VerifyConnection.css';

export default function VerifyConnection() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/api/status/')
      .then(response => {
        setStatus(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Não foi possível conectar ao backend.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="verify-card">
      <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
        Status da Infraestrutura
      </p>

      {loading ? (
        <p style={{ color: 'var(--text-dim)' }}>⌛ Conectando ao Railway...</p>
      ) : error ? (
        <div>
          <p className="text-error">❌ Erro de Conexão</p>
          <div className="status-box">
            <p>{error}</p>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-success">✅ Backend Conectado!</p>
          <div className="status-box">
            <p><strong>API Status:</strong> {status?.status}</p>
            <p><strong>Database:</strong> {status?.database?.message}</p>
            <p><strong>Ambiente:</strong> {import.meta.env.MODE}</p>
          </div>
        </div>
      )}

      <Link to="/" className="btn-back">
        ← Voltar para Home
      </Link>
    </div>
  );
}