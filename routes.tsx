import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './src/App.tsx'
import Cadastro from "./src/Cadastro.tsx";

const RoutesComponent: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesComponent;
