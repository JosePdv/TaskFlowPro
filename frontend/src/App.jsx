// frontend/src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Organizations from './pages/Organizations/Organizations';
import VerifyConnection from './pages/VerifyConnection/VerifyConnection';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <h1 className="app-title">TaskFlowPro</h1>
        <small className="app-subtitle">Full Stack Developer Environment</small>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<VerifyConnection />} />
          <Route path="/organizations" element={<Organizations />} />
        </Routes>

        <footer className="app-footer">
           Docker composer project with:Django + React | PostgreSQL | Redis
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;