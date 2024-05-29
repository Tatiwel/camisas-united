import React from "react";
import perfil from "../Perfil.svg";
import bag from "../Bag.svg";
import logo from "../CUnitedLogo.svg";
import sair from "../sair.png";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className=" flex bg-gray-700 justify-between items-center w-full">
      <div className="flex justify-between 1/2">
        <div className="pl-4 ">
          <a href="/">
            <img src={logo} alt="Logo" className="h-20 " />
          </a>
        </div>
        <div className="flex items-center">
          <div className="text-white pr-4">
            <Link to={'/ligas'}>
            <a href="">Ligas</a></Link>
          </div>
          <div className="text-white pr-4">
            <Link to={'/marcas'}>
            <a href="">Marcas</a></Link>
          </div>
          <div className="text-white pr-4">
          <Link to={'/masculino'}>
            <a href="">Masculino</a></Link>
          </div>
          <div className="text-white pr-4">
          <Link to={'/feminino'}>
            <a href="">Feminino</a></Link>
          </div>
          <div className="text-white">
          <Link to={'/infantil'}>
            <a href="">Infantil</a></Link>
          </div>
        </div>
      </div>
      <div className="flex justify-end 1/2">
        <div className="flex items-center">
          <div>
            <a href="/carrinho">
              <img src={bag} alt="Bag" className="h-10 " />
            </a>
          </div>
          <div>
            {localStorage.getItem("logado") ? (
              <a href="/Perfil">
                <img src={sair} alt="Perfil" className="h-10" />
              </a>
            ) : (
              <a href="/Login">
                <img src={perfil} alt="Perfil" className="h-10" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
