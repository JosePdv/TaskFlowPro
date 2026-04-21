import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-card">
      <div className="status-indicator">
        <span className="dot"></span>
        <p style={{ margin: 0, color: '#94a3b8' }}>Infraestrutura Ativa</p>
      </div>

      <nav className="home-nav">
        <Link to="/verify" className="nav-link blue">
          Ver Status da Rede
        </Link>
        <Link to="/organizations" className="nav-link green">
          Ver Organizações
        </Link>
      </nav>
    </div>
  );
};

export default Home;