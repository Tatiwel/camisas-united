import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./src/App.tsx";
import Login from "./src/Pages/Login/Login.tsx";
import Cadastro from "./src/Pages/Cadastro/Cadastro.tsx";
import CadastroFuncionario from "./src/Pages/Cadastro/CadastroFuncionario.tsx";
import Categoria from "./src/Pages/Cadastro/Categoria.tsx";
import Fornecedor from "./src/Pages/Produto/Fornecedor.tsx";
import CadastroProduto from "./src/Pages/Produto/CadastroProduto.tsx";
import Error from "./src/Pages/Erros/Error.tsx";

const RoutesComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error/>} /> //daniel fez isso aq
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro-funcionario" element={<CadastroFuncionario />} /> //aq tb
        <Route path="/categoria" element={<Categoria />} /> // aq tb
        <Route path="/fornecedor" element={<Fornecedor />} /> // aq tb
        <Route path="/cadastro-produto" element={<CadastroProduto />} /> // aq tb
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesComponent;
