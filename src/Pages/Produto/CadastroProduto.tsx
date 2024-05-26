// src/CadastroProduto.tsx
import React, { useState } from 'react';

const CadastroProduto: React.FC = () => {
const [formData, setFormData] = useState({
productName: '',
supplierID: '',
categoryID: '',
quantidade: '',
unitPrice: '',
unitsInStock: '',
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
console.log('Dados do Produto:', formData);
};

return (
<div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6 text-center">Cadastro de Produto</h2>
    <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">Nome do Produto:</label>
        <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">ID do Fornecedor:</label>
        <input
            type="text"
            name="supplierID"
            value={formData.supplierID}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">ID da Categoria:</label>
        <input
            type="text"
            name="categoryID"
            value={formData.categoryID}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">Quantidade:</label>
        <input
            type="text"
            name="quantidade"
            value={formData.quantidade}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">Preço por Unidade:</label>
        <input
            type="text"
            name="unitPrice"
            value={formData.unitPrice}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 mb-2">Unidades em Estoque:</label>
        <input
            type="text"
            name="unitsInStock"
            value={formData.unitsInStock}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
        />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Cadastrar
        </button>
    </form>
    </div>
</div>
);
};

export default CadastroProduto;
