import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';
import NavBar from '../../../assets/Components/NavBar';


const Marca: React.FC = () => {
  const marcas = [
    { nome: 'Nike', imagem: 'https://seeklogo.com/images/N/nike-logo-47A65A59D5-seeklogo.com.png' },
    { nome: 'Adidas', imagem: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
    { nome: 'Puma', imagem: 'https://logosmarcas.net/wp-content/uploads/2020/04/Puma-Logo.png' },
    {nome: 'Umbro', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Logo_Umbro.png/640px-Logo_Umbro.png'}
  ];

  return (
    <div>
      <NavBar />
      <h1 className="title">Marcas</h1>
      <div className="marcas-container">
        {marcas.map((marca, index) => (
          <Link key={index} to={`/marcas/${marca.nome}`} className="marca-link hover:bg-orange-600 rounded-md p-4">
            <div className="marca-item">
              <img src={marca.imagem} alt={marca.nome} className="marca-image" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Marca;
