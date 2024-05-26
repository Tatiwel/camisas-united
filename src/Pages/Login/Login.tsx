import type React from "react";
import { useState } from "react";
import logo from "/src/assets/CUnitedLogo.svg";
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 rounded-sm">
      <div className="flex justify-center items-center w-2/3 ">
        <img src={logo} alt="Logo" className="" />
      </div>
      <div className="flex min-h-screen justify-center items-center bg-gray-400 w-1/3 ">
        <div className="flex flex-col w-full">
          <div className="mb-4 px-6">
                <label className="block text-gray-700 mb-2">Usuário:</label>
                <input
                  type="text"
                  name="Usuario"
                  value={formData.Usuario}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4 px-6">
                <label className="block text-gray-700 mb-2">Senha:</label>
                <input
                  type="Senha"
                  name="Senha"
                  value={formData.Senha}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="flex justify-center px-6">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-20 text-white py-2 rounded-md"
              >
                Login
              </button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Login;
