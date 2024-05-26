import { useState } from "react";

const CadastroCliente = () => {
  const [formData, setFormData] = useState({
    Nome: "",
    email: "",
    Senha: "",
    Endereco: "",
    Cidade: "",
    Estado: "",
    Codigo_Postal: "",
    Pais: "",
    Telefone: "",
  });

  const handleChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 p-5">
      <div className="bg-gray-100 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Cadastro de Cliente
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 mb-2">Nome:</label>
            <input
              type="text"
              name="Nome"
              value={formData.Nome}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded "
            />
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 mb-2">E-mail:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 mb-2">Endereço:</label>
            <input
              type="text"
              name="Endereco"
              value={formData.Endereco}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Senha:</label>
            <input
              type="text"
              name="Senha"
              value={formData.Senha}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Cidade:</label>
            <input
              type="text"
              name="Cidade"
              value={formData.Cidade}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Estado:</label>
            <input
              type="text"
              name="Estado"
              value={formData.Estado}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Codigo Postal:</label>
            <input
              type="text"
              name="Codigo_Postal"
              value={formData.Codigo_Postal}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Pais:</label>
            <input
              type="text"
              name="Pais"
              value={formData.Pais}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Telefone:</label>
            <input
              type="text"
              name="Telefone"
              value={formData.Telefone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded "
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroCliente;
