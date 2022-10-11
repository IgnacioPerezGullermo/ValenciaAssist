import React, { useState } from 'react';
import './HomeStaff.scss';
import Silvia from '../../assets/silvia-bgless.png';
import Caty from '../../assets/cate-bgless.png';
import { useSpring, animated } from 'react-spring';

export const HomeStaff = () => {
  const [Focus, setFocus] = useState('');

  const props1 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 800 },
  });
  const props2 = useSpring({
    to: { width: '100vw' },
    from: { width: '50vw' },
    config: { duration: 1500 },
  });
  const props2re = useSpring({
    to: { width: '50vw' },
    from: { width: '100vw' },
    config: { duration: 1500 },
    delay: 500,
    immediate: true,
  });
  const props3 = useSpring({
    to: { width: '40vw', marginLeft: '20vw', top: '30%', left: '0%' },
    from: { width: '25vw', marginLeft: '0vw' },
    config: { duration: 1500 },
  });
  const props3re = useSpring({
    to: { width: '25vw', marginLeft: '0vw' },
    from: { width: '40vw', marginLeft: '20vw', top: '40%' },
    config: { duration: 1500 },
    immediate: true,
  });
  const props5 = useSpring({
    to: { width: '40vw', marginRight: '10vw', top: '30%' },
    from: { width: '29vw', marginRight: '0vw' },
    config: { duration: 1500 },
  });
  const props5re = useSpring({
    to: { width: '29vw', marginRight: '0vw' },
    from: { width: '40vw', marginRight: '10vw', top: '40%' },
    immediate: true,
  });

  const props4 = useSpring({
    to: { scale: 1.2 },
    from: { scale: 1 },
    config: { duration: 1000 },
  });
  const props6re = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0, zIndex: 2 },
    delay: 1000,
  });
  const props6 = useSpring({
    to: { opacity: 0, zIndex: 2 },
    from: { opacity: 1 },
  });

  const handleClick = (info) => {
    if (Focus === 'silvia' || Focus === 'caty') {
      setFocus('');
    } else {
      setFocus(info);
    }
  };

  return (
    <animated.div style={props1} className="HomeStaff-container">
      {/* <Spring> */}
      {Focus === 'caty' ? (
        <animated.div
          style={Focus === 'caty' ? props6 : props6re}
          className="HomeStaff-container-leftSide"
        >
          <animated.img
            style={Focus === 'silvia' ? props4 : null}
            className="HomeStaff-container-leftSide-Silvia"
            src={Silvia}
            alt="silvia"
          />
          <animated.div
            style={Focus === 'silvia' ? props3 : null}
            className="HomeStaff-container-leftSide-TextBox"
          >
            <h1>Silvia</h1>
            <h4>Licenciada en Trabajo Social</h4>
            {Focus === 'silvia' ? (
              <p>
                Soy Silvia Yaques, Licenciada en Trabajo Social (UBA) y trabajé
                27 años en la obra social más grande de Argentina (PAMI);
                participé en la creación de programas de promoción de salud, fui
                Jefa de Agencia en el Servicio de Trabajo Social, coordiné
                encuentros con entidades de salud mental reconocidas y coordiné
                servicios en centros de día, hogares y residencias geriátricas.
              </p>
            ) : null}
            <button onClick={() => handleClick('silvia')}>
              {Focus === 'silvia' ? 'Volver' : 'Leer mas'}
            </button>
          </animated.div>
        </animated.div>
      ) : (
        <animated.div
          style={Focus === 'silvia' ? props2 : props2re}
          className="HomeStaff-container-leftSide"
        >
          <animated.img
            style={Focus === 'silvia' ? props4 : null}
            className="HomeStaff-container-leftSide-Silvia"
            src={Silvia}
            alt="silvia"
          />
          <animated.div
            style={Focus === 'silvia' ? props3 : props3re}
            className="HomeStaff-container-leftSide-TextBox"
          >
            <h1>Silvia</h1>
            <h4>Licenciada en Trabajo Social</h4>
            {Focus === 'silvia' ? (
              <p>
                Soy Silvia Yaques, Licenciada en Trabajo Social (UBA) y trabajé
                27 años en la obra social más grande de Argentina (PAMI);
                participé en la creación de programas de promoción de salud, fui
                Jefa de Agencia en el Servicio de Trabajo Social, coordiné
                encuentros con entidades de salud mental reconocidas y coordiné
                servicios en centros de día, hogares y residencias geriátricas.
              </p>
            ) : null}
            <button onClick={() => handleClick('silvia')}>
              {Focus === 'silvia' ? 'Volver' : 'Leer mas'}
            </button>
          </animated.div>
        </animated.div>
      )}

      {Focus === 'silvia' ? (
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
          style={Focus === 'caty' ? props2 : props2re}
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
      )}
    </animated.div>
  );
};
