import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./src/App.tsx";
import Login from "./src/Pages/Login/Login.tsx";
import Cadastro from "./src/Pages/Cadastro/Cadastro.tsx";
import CadastroFuncionario from "./src/Pages/Cadastro/CadastroFuncionario.tsx";
import Categoria from "./src/Pages/Cadastro/Categoria.tsx";
import Fornecedor from "./src/Pages/Produto/Fornecedor.tsx";
import CadastroProduto from "./src/Pages/Produto/CadastroProduto.tsx";
import Error from "./src/Pages/Erros/Error.tsx";
import Admin from "./src/Pages/Admin/Admin.tsx";
import Carrinho from "./src/Pages/Carrinho/Carrinho.tsx";

const RoutesComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error/>} /> //Helder fez isso aq
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro-funcionario" element={<CadastroFuncionario />} /> 
        <Route path="/cadastro-categoria" element={<Categoria />} />
        <Route path="/cadastro-fornecedor" element={<Fornecedor />} />
        <Route path="/cadastro-produto" element={<CadastroProduto />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesComponent;
