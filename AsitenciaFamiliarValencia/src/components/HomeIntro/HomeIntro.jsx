import React from 'react';
import Portada from '../../assets/artesyciencias.png';
import Button from 'react-bootstrap/Button';
import './HomeIntro.scss';
import { Link } from 'react-router-dom';

export const HomeIntro = () => {
  return (
    <div>
      <div className="HomeIntro-container">
        <div className="HomeIntro-container-sidebar">
          <h1>
            Les Arts <br />
            Els Cuiden
          </h1>
          <p>Gestion de Servicios Integrales</p>
          <br />
          <Link to="/ServiciosFamilia">
            <button className="HomeIntro-container-sidebar-button">
              Servicios a Familias
            </button>
          </Link>
          <br />
          <button className="HomeIntro-container-sidebar-button">
            Cursos y formaciones
          </button>
          <br />
          <Link to="/ServiciosEmpresas">
            <button className="HomeIntro-container-sidebar-button">
              Servicios para Empresas
            </button>
          </Link>
        </div>
        <div className="HomeIntro-container-cover">
          <div className="HomeIntro-container-shadow"></div>
          <img src={Portada} />
        </div>
      </div>
    </div>
  );
};
