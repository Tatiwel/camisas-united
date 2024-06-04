import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';
import NavBar from '../../../assets/Components/NavBar';

const Ligas: React.FC = () => {
  const ligas = [
    { nome: 'Brasileirão Serie A', imagem: 'https://i.pinimg.com/originals/5d/df/2f/5ddf2fcc4d7b73f6bcd245776f642112.png' },
    { nome: 'Premier League', imagem: 'https://seeklogo.com/images/P/premier-league-new-logo-D22A0CE87E-seeklogo.com.png' },
    { nome: 'La Liga', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/LaLiga_logo_2023.svg/480px-LaLiga_logo_2023.svg.png' },
    { nome: 'Bundesliga', imagem: 'https://upload.wikimedia.org/wikipedia/pt/c/cc/2._Bundesliga_logo.png'}
  ];

  return (
    <div className="ligas-page">
      <NavBar />
      <h1 className="title">Ligas</h1>
      <div className="ligas-container">
        {ligas.map((liga, index) => (
          <Link key={index} to={`/ligas/${liga.nome}`} className="liga-link hover:bg-gray-700 rounded-md p-4">
            <div className="liga-item">
              <img src={liga.imagem} alt={liga.nome} className="liga-image" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Ligas;
