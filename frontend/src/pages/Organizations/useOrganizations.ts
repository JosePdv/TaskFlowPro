// frontend/src/hooks/useOrganizations.ts
import { useState, useEffect } from 'react';
import { Organization } from '../../interfaces/Organization';
import { getOrganizations } from '../../services/Organizations/organizationsService';


export function useOrganizations() {
  const [orgs, setOrgs] = useState<Organization[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

 useEffect(() => {
    getOrganizations()
      .then(setOrgs)
      .catch(() => setError("Erro ao carregar organizações"))
      .finally(() => setLoading(false));
  }, []);

  return { orgs, loading, error };
}