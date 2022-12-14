import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import { Home } from './views/home';
import { ServiciosFamilia } from './views/ServiciosFamilia';
import { ServiciosEmpresa } from './views/ServiciosEmpresa';
import { Cursos } from './views/Cursos';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/ServiciosFamilia" element={<ServiciosFamilia />}></Route>
        <Route path="/ServiciosEmpresas" element={<ServiciosEmpresa />}></Route>
        <Route path="/Cursos" element={<Cursos />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
