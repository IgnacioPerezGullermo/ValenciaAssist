import React from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import { BussinessServices } from '../components/BussinessServices/BussinessServices';

export const ServiciosEmpresa = () => {
  return (
    <div>
      <NavBar />
      <BussinessServices />
      {/* <div className="homeBanner">
        <h2 className="homeBanner-title">Servicios de Familia</h2>
        <p className="homeBanner-subtitle">
          Te acompañamos en cada etapa de tu vida
        </p>
      </div> */}
    </div>
  );
};
