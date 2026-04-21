import { useState, useEffect } from 'react';
import api from '../../services/api';

export function useOrganizations() {
  const [orgs, setOrgs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/api/organizations/')
      .then(res => setOrgs(res.data))
      .catch(err => setError("Erro ao carregar dados."))
      .finally(() => setLoading(false));
  }, []);

  return { orgs, loading, error };
}