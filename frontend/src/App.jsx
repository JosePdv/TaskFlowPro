import { useEffect, useState } from 'react';
import api from './services/api'; 

function App() {
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
        console.error("Erro ao conectar no Django:", err);
        setError("Não foi possível conectar ao backend no Railway.");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', 
      textAlign: 'center',
      backgroundColor: '#f4f7f6',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#2c3e50' }}>TaskFlowPro</h1>
      <p style={{ color: '#7f8c8d' }}>Validação de Infraestrutura Full Stack</p>
      <p style={{ color: '#7f8c8d' }}>Teste josé gabriel coelho da cunha</p>
      <div style={{ 
        marginTop: '30px', 
        padding: '30px', 
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        borderRadius: '12px',
        display: 'inline-block',
        minWidth: '300px'
      }}>
        {loading ? (
          <p>⏳ Conectando ao backend no Railway...</p>
        ) : error ? (
          <div>
            <p style={{ color: '#e74c3c', fontSize: '1.2rem' }}>❌ Erro de Conexão</p>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>{error}</p>
            <small>Verifique o CORS no Railway e a variável VITE_API_URL na Vercel.</small>
          </div>
        ) : (
          <div>
            <p style={{ color: '#27ae60', fontSize: '1.2rem', fontWeight: 'bold' }}>
              ✅ Backend Conectado!
            </p>
            <hr style={{ margin: '15px 0', border: '0', borderTop: '1px solid #eee' }} />
            <div style={{ textAlign: 'left', fontSize: '0.9rem' }}>
              <p><strong>API Status:</strong> {status?.status}</p>
              <p><strong>Database:</strong> {status?.database?.message}</p>
              <p><strong>Ambiente:</strong> {import.meta.env.MODE}</p>
            </div>
          </div>
        )}
      </div>

      <footer style={{ marginTop: '40px', fontSize: '0.8rem', color: '#bdc3c7' }}>
        Ubuntu 24.04 LTS | Django + Gunicorn | React + Vite
      </footer>
    </div>
  );
}

export default App;