import React from 'react';
import sample from '../../assets/enfermeria2.png';
import { useNavigate } from 'react-router-dom';
import './CursosInterfaz.scss';

const cursos = [
  {
    name: 'Yoga inclusivo',
    desc: 'Aprenderas a impartir clases de Yoga para todas las edades, de niños a adultos; y aprenderas todos los beneficios que esta actividad brinda a la calidad de vida de las personas',
    inst: 'Caterina Del Carlo',
  },
  {
    name: 'Logoterapia',
    desc: 'Aprenderas a sobre la logoterapia y la transformacion a traves de la busqueda de un sentido',
    inst: 'Viktor Frankl',
  },
  {
    name: 'Masajista',
    desc: 'Aprende los secretos de las molestias musculares y como lidiar con ellas. Certificate profesionalmente con neustros instructores',
    inst: 'Jorge Mas Hages',
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
  const navigate = useNavigate();
  const handleClick = (param) => {
    navigate(`/Contacto?asunto=${param}`);
  };
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
                  <button
                    className="CursosInterfaz-container-cardContainer-card-button"
                    onClick={() => handleClick(curso.name)}
                  >
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
