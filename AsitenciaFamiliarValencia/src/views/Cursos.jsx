import React from 'react';
import { CursosInterfaz } from '../components/CursosInterfaz/CursosInterfaz';
import { NavBar } from '../components/NavBar/NavBar';
import '../css/index.scss';

export const Cursos = () => {
  return (
    <div className="cursos-wall">
      <NavBar />
      <CursosInterfaz />
    </div>
  );
};
