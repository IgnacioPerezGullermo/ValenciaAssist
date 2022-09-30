import React, { useState, useEffect } from 'react';
import './HomeFooter.scss';

export const HomeFooter = () => {
  return (
    <div className="HomeFooter-container">
      <div className="HomeFooter-container-dataBox">
        <h2>1232</h2>
        <h3>Pacientes</h3>
      </div>
      <div className="HomeFooter-container-dataBox">
        <h2>64</h2>
        <h3>Cursos</h3>
      </div>
      <div className="HomeFooter-container-dataBox">
        <h2>42</h2>
        <h3>Eventos</h3>
      </div>
      <div className="HomeFooter-container-dataBox">
        <h2>15</h2>
        <h3>Terapeutas</h3>
      </div>
    </div>
  );
};
