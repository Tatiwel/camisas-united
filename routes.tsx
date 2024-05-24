import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./src/App.tsx";
import Cadastro from "./src/Pages/Cadastro/Cadastro.tsx";
import Cliente from "./src/Pages/Cadastro/Cliente.tsx";
import Login from "./src/Pages/Login/Login.tsx";

const RoutesComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Cadastro/cliente" element={<Cliente />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesComponent;
