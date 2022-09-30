import React from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import { ServicesCard } from '../components/ServicesCard/ServicesCard';

export const ServiciosFamilia = () => {
  return (
    <div>
      <NavBar />
      <ServicesCard />
      {/* <div className="homeBanner">
        <h2 className="homeBanner-title">Servicios de Familia</h2>
        <p className="homeBanner-subtitle">
          Te acompañamos en cada etapa de tu vida
        </p>
      </div> */}
    </div>
  );
};
