export interface Organization {
  id: number; // ID da organização
  name: string; // Nome da organização
  owner_username: string; //Dono da organização
  slug: string; // Slug da organização, usado para URLs amigáveis 
  created_at?: string; // campo opcional para data de criação
}