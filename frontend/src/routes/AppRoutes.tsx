import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login"; // Sua nova Home
import Home from "../pages/Home/Home";
import VerifyConnection from "../pages/VerifyConnection/VerifyConnection";
import Organizations from "../pages/Organizations/Organizations";
import { authService } from "../services/Auth/auth";


const PrivateRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const isAuthenticated = !!authService.getToken();
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route 
          path="/home" 
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } 
        />
        
        <Route 
          path="/verify-connection" 
          element={
            <PrivateRoute>
              <VerifyConnection />
            </PrivateRoute>
          } 
        />
        
        <Route 
          path="/organizations" 
          element={
            <PrivateRoute>
              <Organizations />
            </PrivateRoute>
          } 
        />

        {/* Fallback: Qualquer rota não encontrada volta para o Login ou Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;