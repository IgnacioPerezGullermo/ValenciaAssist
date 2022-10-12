import React from 'react';
import sample from '../../assets/enfermeria2.png';
import './CursosInterfaz.scss';

const cursos = [
  {
    name: 'Yoga inclusivo',
    desc: 'Aprenderas a impartir clases de Yoga para todas las edades, de niños a adultos; y aprenderas todos los beneficios que esta actividad brinda a la calidad de vida de las personas',
    inst: 'Caterina Del Carlo',
  },
  {
    name: 'Yoga inclusivo',
    desc: 'Aprenderas a impartir clases de Yoga para todas las edades, de niños a adultos; y aprenderas todos los beneficios que esta actividad brinda a la calidad de vida de las personas',
    inst: 'Caterina Del Carlo',
  },
  {
    name: 'Yoga inclusivo',
    desc: 'Aprenderas a impartir clases de Yoga para todas las edades, de niños a adultos; y aprenderas todos los beneficios que esta actividad brinda a la calidad de vida de las personas',
    inst: 'Caterina Del Carlo',
  },
  {
    name: 'Yoga inclusivo',
    desc: 'Aprenderas a impartir clases de Yoga para todas las edades, de niños a adultos; y aprenderas todos los beneficios que esta actividad brinda a la calidad de vida de las personas',
    inst: 'Caterina Del Carlo',
  },
  {
    name: 'Yoga inclusivo',
    desc: 'Aprenderas a impartir clases de Yoga para todas las edades, de niños a adultos; y aprenderas todos los beneficios que esta actividad brinda a la calidad de vida de las personas',
    inst: 'Caterina Del Carlo',
  },
];

export const CursosInterfaz = () => {
  return (
    <>
      <div className="CursosInterfaz-container">
        <nav className="CursosInterfaz-container-nav">
          <p className=".CursosInterfaz-container-nav title">
            Cursos y capacitaciones
          </p>
          <select className=".CursosInterfaz-container select-types">
            <option>Selecciona una opcion:</option>
            <option>Administración</option>
            <option>Terapia</option>
          </select>
        </nav>
        <div className="CursosInterfaz-container-cardContainer">
          {cursos.length > 0 ? (
            cursos.map((curso) => {
              return (
                <div className="CursosInterfaz-container-cardContainer-card">
                  <img src={sample}></img>
                  <h1>{curso.name}</h1>
                  <h4>Intructor: {curso.inst}</h4>
                  <p>{curso.desc}</p>
                  <button className="CursosInterfaz-container-cardContainer-card-button">
                    Solicitar Info
                  </button>
                </div>
              );
            })
          ) : (
            <p>No hay cursos por el momento</p>
          )}
        </div>
      </div>
    </>
  );
};
