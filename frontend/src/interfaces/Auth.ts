export interface LoginResponse {
  access: string;
  refresh: string;
}

export interface UserCredentials {
  username: string;
  password: string;
}