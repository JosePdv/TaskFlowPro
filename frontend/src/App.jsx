// frontend/src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Organizations from './pages/Organizations/Organizations';
import VerifyConnection from './pages/VerifyConnection/VerifyConnection';
import './App.css';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
  
      <div className="app-container">
        <h1 className="app-title">TaskFlowPro</h1>
        <small className="app-subtitle">Full Stack Developer Environment</small>
        {/* ROTAS DO REACT AQUI */}
       <AppRoutes />
       {/*FIM DAS ROTAS DO REACT AQUI */}
        <footer className="app-footer">
           Docker composer project with:Django + React | PostgreSQL | Redis
        </footer>
      </div>
   
  );
}

export default App;