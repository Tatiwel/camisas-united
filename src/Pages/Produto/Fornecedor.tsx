// src/CadastroFornecedor.tsx
import React, { useState } from 'react';

const CadastroFornecedor: React.FC = () => {
const [formData, setFormData] = useState({
companyName: '',
contactName: '',
address: '',
city: '',
region: '',
postalCode: '',
country: '',
phone: ''
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const { name, value } = e.target;
setFormData({
    ...formData,
    [name]: value
});
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
console.log('Dados do Fornecedor:', formData);
};

return (
<div className="min-h-screen flex items-center justify-center bg-gray-700 p-5">
    <div className="bg-gray-100 p-8 rounded shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6 text-center">Cadastro de Fornecedor</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">Nome da Empresa:</label>
        <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">Nome do Contato:</label>
        <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">Endereço:</label>
        <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">Cidade:</label>
        <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">Região:</label>
        <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">Código Postal:</label>
        <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">País:</label>
        <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">Telefone:</label>
        <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
        />
        </div>
        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded ">
        Cadastrar
        </button>
    </form>
    </div>
</div>
);
};

export default CadastroFornecedor;
