import React, { useState } from 'react';

const CadastroProduto: React.FC = () => {
const [formData, setFormData] = useState({
categoryName: '',
description: ''
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
const { name, value } = e.target;
setFormData({
    ...formData,
    [name]: value
});
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
console.log('Dados do Produto:', formData);
};

return (
<div className="min-h-screen flex items-center justify-center bg-gray-700 p-5">
    <div className="bg-gray-100 p-8 rounded shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6 text-center">Cadastro de Produto</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">Nome da Categoria:</label>
        <input
            type="text"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">Descrição:</label>
        <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 resize-none border rounded"
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

export default CadastroProduto;
