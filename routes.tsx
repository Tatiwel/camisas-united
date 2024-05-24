import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './src/Home.tsx'
import Cadastro from "./src/Pages/Cadastro/Cadastro.tsx";
import Login from "./src/Pages/Login/Login.tsx";

const RoutesComponent: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesComponent;
