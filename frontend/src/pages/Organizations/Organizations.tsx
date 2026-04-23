import React from 'react';
import { useOrganizations } from './useOrganizations';
import './Organizations.css';


const Organizations: React.FC = () => {

  const { orgs, loading, error } = useOrganizations();

  return (
    <div className="orgs-view">
      <h2>Organizações Populadas (Seed)</h2>
      
      {loading && <p>Carregando...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <ul className="orgs-list">
          {orgs.map(org => (
  <li key={org.id} className="org-card">
    <strong>Nome da organização:</strong> 
    {org.name}
    <br></br>
    <span>Dono: {org.owner_username}</span> 
  </li>
))}
        </ul>
      )}
      
      <a href="/" className="back-link">← Voltar</a>
    </div>
  );
};

export default Organizations;