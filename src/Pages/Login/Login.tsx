import type React from "react";
import { useState } from "react";
import logo from "/src/assets/CUnitedLogo.svg";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    Usuario: "",
    Senha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 rounded-sm">
      <div className="flex justify-center items-center w-2/3 ">
        <img src={logo} alt="Logo" className="" />
      </div>
      <div className="flex min-h-screen justify-center items-center bg-gray-400 w-1/3 ">
        <div className="flex flex-col w-full">
          <div className="mb-4 px-6">
                <label className="block text-gray-700 mb-2 text-2xl">Usuário:</label>
                <input
                  type="text"
                  name="Usuario"
                  value={formData.Usuario}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4 px-6">
                <label className="block text-gray-700 mb-2 text-2xl">Senha:</label>
                <input
                  type="Senha"
                  name="Senha"
                  value={formData.Senha}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="flex justify-center px-6 gap-2 flex-col">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-20 text-white py-2 rounded-md text-xl"
              >
                Login
              </button>
              <Link to="/cadastro"
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-center px-12 text-white py-2 rounded-md text-xl"
              >
                Cadastra-se
              </Link>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
