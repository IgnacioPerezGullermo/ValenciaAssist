import React, { useState, useEffect } from 'react';
import { Fade, Modal, Button } from 'react-bootstrap';
import Picture from '../../assets/hero-img23.png';
import ModalAbout from '../ModalAbout/ModalAbout';
import './HomeAbout.scss';

export const HomeAbout = () => {
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setOpen(!open);
  }, []);
  return (
    <div>
      <ModalAbout show={modalShow} onHide={() => setModalShow(false)} />
      <div className="HomeAbout-container">
        <Fade in={open} timeout={1500} dimension="width">
          <div className="HomeAbout-container-leftSide">
            <h3>Sobre Nosotros</h3>
            <hr className="HomeAbout-container-leftSide-decorator" />
            <h1>¿Quienes somos?</h1>
            <p>
              Somos <b>Silvia</b> y <b>Caterina</b>, dos emprendedoras, dos
              generaciones, dos <b>mujeres con trayectoria </b>
              académica y laboral en las áreas sociales y sanitarias, con
              experiencia profesional, la comprensión y empatía necesaria para
              abordar las diferentes problemáticas que afectan a los colectivos
              sociales.
            </p>
            <p>
              Desde la mirada del Trabajo Social, Silvia, y desde la Terapia
              Ocupacional, Caterina, nos dedicamos a brindar soluciones directas
              en el propio hogar mediante intervenciones que favorezcan la
              integración de la persona en su entorno habitual. Hacer valer
              nuestro lema: <b>“Unidas por el bienestar social”</b>, es un
              desafío para nosotras; satisfacer las necesidades propias de cada
              sujeto proporcionando una calidad de vida adecuada en la sociedad
              en la cual está inmerso.
            </p>
            <p>
              Ofrecemos servicios de acompañamiento y de ayuda durante{' '}
              <b>todas las etapas de la vida</b>; desde la gestación, a
              servicios de canguro e incluso auxiliares gerontológicos y todo
              tipo de ayuda domiciliaria. Proporcionamos atención diferenciada
              por edad, situación de dependencia, discapacidad, enfermedad
              (crónica o circunstancial) y también prestaciones orientadas a
              necesidades domésticas, para simplificar ciertos aspectos
              cotidianos.
            </p>
            <button
              className="HomeIntro-container-sidebar-button"
              onClick={() => setModalShow(true)}
            >
              Leer mas
            </button>
          </div>
        </Fade>
        <div className="HomeAbout-container-rightSide">
          <img
            className="HomeAbout-container-picture"
            src={Picture}
            alt="Foto about"
          />
        </div>
      </div>
    </div>
  );
};
