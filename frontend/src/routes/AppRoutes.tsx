import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import VerifyConnection from "../pages/VerifyConnection/VerifyConnection";
import Organizations from "../pages/Organizations/Organizations";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify-connection" element={<VerifyConnection />} />
        <Route path="/organizations" element={<Organizations />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;