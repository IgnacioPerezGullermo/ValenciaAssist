import React, { useState } from 'react';
import './HomeStaff.scss';
import Silvia from '../../assets/silvia-bgless.png';
import Caty from '../../assets/cate-bgless.png';
import { useSpring, animated } from 'react-spring';
import { StaffCard } from './StaffCard';

const info = {
  silvia: {
    name: 'silvia',
    bio: 'Soy Silvia Yaques, Licenciada en Trabajo Social (UBA) y trabajé 27 años en la obra social más grande de Argentina (PAMI); participé en la creación de programas de promoción de salud, fui Jefa de Agencia en el Servicio de Trabajo Social, coordiné encuentros con entidades de salud mental reconocidas y coordiné servicios en centros de día, hogares y residencias geriátricas.',
    desc: 'Licenciada en Trabajo Social',
  },
  caty: {
    name: 'caterina',
    bio: 'Soy Caterina Del Carlo, Licenciada en Terapia Ocupacional (UAI) y trabajé en fundación INECO ad honórem para formarme y luego como T.O. de planta, para prestadoras de salud como Swiss Medical, servicio privado y atención en consultorios particulares individuales y grupales. Además, participé de charlas y congresos a la comunidad, Día del Alzheimer, Evaluaciones Funcionales y tratamientos a pacientes en el Departamento de Neurociencias de la Fundación Favaloro (BA, Arg.).',
    desc: 'Licenciada en Terapia Ocupacional',
  },
};

export const HomeStaff = () => {
  const [Focus, setFocus] = useState('');

  return (
    <div className="HomeStaff-container">
      {/* <Spring> */}
      <StaffCard
        setFocus={setFocus}
        Focus={Focus}
        data={info.silvia}
        side="left"
        pic={Silvia}
      ></StaffCard>
      <StaffCard
        setFocus={setFocus}
        Focus={Focus}
        data={info.caty}
        side="right"
        pic={Caty}
      ></StaffCard>
      {/* {Focus === 'silvia' ? (
        <animated.div
          style={Focus === 'silvia' ? props6 : props6re}
          className="HomeStaff-container-rightSide"
        >
          <img
            className="HomeStaff-container-rightSide-Caty"
            src={Caty}
            alt="silvia"
          />
          <div className="HomeStaff-container-rightSide-TextBox">
            <h1>Caterina</h1>
            <h4>Licenciada en Terapia Ocupacional</h4>
            <button onClick={() => handleClick('caty')}>
              {Focus === 'caty' ? 'Volver' : 'Leer mas'}
            </button>
          </div>
        </animated.div>
      ) : (
        <animated.div
          style={Focus === 'caty' ? props2 : props6re}
          className="HomeStaff-container-rightSide"
        >
          <animated.img
            style={Focus === 'caty' ? props4 : null}
            className="HomeStaff-container-rightSide-Caty"
            src={Caty}
            alt="silvia"
          />
          <animated.div
            style={Focus === 'caty' ? props5 : props5re}
            className="HomeStaff-container-rightSide-TextBox"
          >
            <h1>Caterina</h1>
            <h4>Licenciada en Terapia Ocupacional</h4>
            {Focus === 'caty' ? (
              <p>
                Soy Caterina Del Carlo, Licenciada en Terapia Ocupacional (UAI)
                y trabajé en fundación INECO ad honórem para formarme y luego
                como T.O. de planta, para prestadoras de salud como Swiss
                Medical, servicio privado y atención en consultorios
                particulares individuales y grupales. Además, participé de
                charlas y congresos a la comunidad, Día del Alzheimer,
                Evaluaciones Funcionales y tratamientos a pacientes en el
                Departamento de Neurociencias de la Fundación Favaloro (BA,
                Arg.).
              </p>
            ) : null}
            <button onClick={() => handleClick('caty')}>
              {Focus === 'caty' ? 'Volver' : 'Leer mas'}
            </button>
          </animated.div>
        </animated.div>
      )} */}
    </div>
  );
};
