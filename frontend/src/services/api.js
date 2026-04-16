// frontend/src/services/api.js
import axios from 'axios';

// Aqui o Vite busca a variável que definiremos na Vercel
// Se não houver variável (localmente), ele usa o localhost
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL: API_URL,
});

export default api;