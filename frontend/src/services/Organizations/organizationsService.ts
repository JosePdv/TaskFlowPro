// src/services/organizationService.ts
import api from '../api';
import { Organization } from '../../interfaces/Organization';

export const getOrganizations = async (): Promise<Organization[]> => {

  const response = await api.get('/api/organizations/');
  
  return response.data.map((data: Organization): Organization => ({
    id: data.id,
    name: data.name, 
    owner_username: data.owner_username, 
    slug: data.slug, 
  }));
};