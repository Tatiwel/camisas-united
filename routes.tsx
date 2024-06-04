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
import Ligas from "./src/Pages/CamisasFutebol/Liga/Ligas.tsx";
import LigaDetail from "./src/Pages/CamisasFutebol/Liga/LigaDetail.tsx";
import Marca from "./src/Pages/CamisasFutebol/Marca/Marca.tsx";
import MarcaDetail from "./src/Pages/CamisasFutebol/Marca/MarcaDetail.tsx";
import Masculino from "./src/Pages/CamisasFutebol/Masculino.tsx";
import Feminino from "./src/Pages/CamisasFutebol/Feminino.tsx";
import Infantil from "./src/Pages/CamisasFutebol/Infantil.tsx";
import RealMadrid from "./src/Pages/CamisasFutebol/RealMadrid.tsx";
import Borussia from "./src/Pages/CamisasFutebol/Borussia.tsx";

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
        <Route path="/ligas" element={<Ligas />} />
        <Route path="/ligas/:liga" element={<LigaDetail />} />
        <Route path="/marcas" element={<Marca />} />
        <Route path="/marcas/:marca" element={<MarcaDetail />} />
        <Route path="/masculino" element={<Masculino />} />
        <Route path="/feminino" element={<Feminino />} />
        <Route path="/infantil" element={<Infantil />} />
        <Route path="/RealMadrid" element={<RealMadrid />} />
        <Route path="/Borussia Dortmund" element={<Borussia />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesComponent;
