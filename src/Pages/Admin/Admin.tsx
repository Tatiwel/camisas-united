import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Admin: React.FC = () => {

  const [user, setUser] = useState(""); 
  const [pass, setPass] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => {
    if (user === "admin" && pass === "admin") {
      setIsLogged(true);
      localStorage.setItem("admin", "true");
      console.log("Logado com sucesso");
    } else {
      console.log("Usuário ou senha inválidos");
    }
  }

  const handleLogout = () => {
    setUser("");
    setPass("");
    setIsLogged(false);
  }
  if (isLogged || localStorage.getItem("admin") === "true"){
  return (
    <div className="flex bg-gray-700 h-screen w-full justify-center items-center">
      <div className="flex flex-col justify-between items-center rounded-md p-8 bg-gray-300 ">
        <div className="flex items-center mb-8">
          <h1 className="text-3xl text-center text-white">Admin Page</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <Link to="/cadastro-fornecedor"
          className="bg-orange-500 text-center hover:bg-orange-600 text-white font-bold py-2 px-6 rounded">
            Fornecedor
          </Link>
          <Link to="/cadastro-produto" 
          className="bg-orange-500 hover:bg-orange-600 text-center text-white font-bold py-2 px-6 rounded">
            Produto
          </Link>
          <Link to="/cadastro" 
          className="bg-orange-500 hover:bg-orange-600 text-center text-white font-bold py-2 px-6 rounded">
            Cliente
          </Link>
          <Link to="/cadastro-funcionario"
           className="bg-orange-500 hover:bg-orange-600 text-center text-white font-bold py-2 px-6 rounded">
            Funcionário
          </Link>
          <Link to="/cadastro-categoria"
          className="bg-orange-500 hover:bg-orange-600 text-center text-white font-bold py-2 px-6 rounded">
            Categoria
          </Link>
          <button onClick={() => {handleLogout()}}
          className="bg-orange-500 hover:bg-orange-600 text-center text-white font-bold py-2 px-6 rounded">
            Logout
          </button>
        </div>
      </div>
    </div>
  );} else {
    return (
      <div className="flex bg-gray-700 h-screen w-full justify-center items-center">
        <div className="flex flex-col justify-between items-center p-4 rounded-md w-2/3 bg-gray-300 ">
          <div className="flex items-center">
            <h1 className="text-3xl text-center mb-8 text-white">Admin Page</h1>
          </div>
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="Usuário" value={user}
            onChange={(e) => setUser(e.target.value)}
              className="bg-gray-200 rounded-md p-2" />
            <input type="password" placeholder="Senha" value={pass}
            onChange={(e) => setPass(e.target.value)}
             className="bg-gray-200 rounded-md p-2" />
             <button onClick={() => {handleLogin()}}
             className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded">
                Entrar
              </button> 
          </div>
        </div>
      </div>
    );
  }
};

export default Admin;
