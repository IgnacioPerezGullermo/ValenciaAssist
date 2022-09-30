import React, { useState } from 'react';
import { Card, Nav, Button, Collapse } from 'react-bootstrap';
import Adultos from '../../assets/adultos-mayores.png';
import { motion } from 'framer-motion';
import './BussinessServices.scss';

const info = {
  hoteles: {
    title: 'Hoteleria',
    desc: 'La atención en el domicilio de un adulto mayor dependiente constituye el mejor ámbito de asistencia. La seguridad que brinda la propia casa, la familiaridad en el espacio y su comodidad crean el marco ideal, donde nuestro personal de asistencia cubrirá todas las necesidades que requiera el cliente...',
    services: [
      {
        name: 'Servicio de canguro',
      },
      {
        name: 'Transporte de pasajeros en aeropuerto',
      },
      { name: 'Servicios gastronomicos (Camareros, Chefs, etc)' },
      {
        name: 'Siempre FIT: entrenamiento personal para los turistas de todas las edades',
      },
      {
        name: 'Guías rápidas de la ciudad de Valencia (Español/Inglés/Italiano)',
      },
      {
        name: 'Médicos clínicos para control',
      },
      { name: 'Asistencia a pasajeros con discapacidad' },
    ],
  },
  aseguradoras: {
    title: 'Aseguradoras',
    subtitle: 'Etapa fundamental en la vida de las personas',
    desc: 'Es durante la infancia que se desarrolla su potencial, su salud tanto física como emocional para a vida adulta. Por ello, es una etapa fundamental en la vida de las personas. Así como, una infancia sana y feliz en un ambiente acogedor genera a un adulto integro...',
    services: [
      {
        name: 'Ayuda en domicilio',
      },
      {
        name: 'Auxiliar gerontologico',
      },
      {
        name: 'Rehabilitación en domicilio (fisioterapia/ Terapia Ocupacional/ Logopeda)',
      },
      {
        name: 'Ayuda doméstica para accidentados',
      },
      {
        name: 'Acompañamiento Terapéutico',
      },
      {
        name: 'Acompañamiento a citas médicas',
      },
      {
        name: 'Informes semanales del servicio, rápida elección del perfil del trabajador adecuado.',
      },
      {
        name: 'Seguimiento del caso.',
      },
    ],
  },
  residencias: {
    title: 'Residencias/Centros de día',
    subtitle: 'Acompañamiento a personas gestantes',
    desc: 'Nuestro servicio dirigido exclusivamente a la mujer embarazada, persona gestante y nuevas familias abarca todo tipo de asistencia, contención, información, actividades que una mujer y en consecuencia su entorno, necesitan en este período tan importante...',
    services: [
      {
        name: 'Servicio de limpieza',
      },
      {
        name: 'Servicio de enfermería y auxiliares',
      },
      { name: 'Servicio de acompañamiento a citas médicas' },
      {
        name: 'Servicio de acompañamiento en salida con familiares',
      },
      {
        name: 'Spa en la residencia: peluquería, manicura/pedicura, cosmetología, masajes.',
      },
      {
        name: 'Rehabilitación individual (según diagnóstico)',
      },
      {
        name: 'Servicio de Fisioterapia, Terapia Ocupacional, Foniatría, Dietologas',
      },
      {
        name: 'Organización de Talleres presenciales en la residencia (Estimulación Cognitiva, Reminiscencia, lúdicos, Movimiento, baile adaptado, Arteterapia)',
      },
      {
        name: 'Organización e implementación de salidas grupales en el programa “Reinsertarme en mi ciudad”',
      },
      {
        name: 'Gestión del personal de la residencia en su totalidad (selección, altas, bajas, nóminas, seguros)',
      },
    ],
  },
};
export const BussinessServices = () => {
  const [Content, setContent] = useState('hoteles');
  const [open, setOpen] = useState(true);
  //console.log(Content);
  const handleClick = (e) => {
    setTimeout(function () {
      setContent(e.target.name);
    });
    // setTimeout(function () {
    //   setOpen(!open);
    // }, 3000);
    // if (open === 'true') {
    //   setOpen(!open);
    // }
  };
  var infor = '';
  if (Content === 'hoteles') {
    infor = info.hoteles;
  } else if (Content === 'aseguradoras') {
    infor = info.aseguradoras;
  } else if (Content === 'residencias') {
    infor = info.residencias;
  }
  console.log(Content);

  return (
    <div className="ServicesCard-container">
      <Nav
        variant="tabs"
        defaultActiveKey="#first"
        className="ServicesCard-container-Card-Header"
      >
        <Nav.Item className="ServicesCard-container-Card-Header-Item">
          <Nav.Link
            className={Content === 'hoteles' ? 'active' : ''}
            name="hoteles"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {info.hoteles.title}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="ServicesCard-container-Card-Header-Item">
          <Nav.Link
            className={Content === 'aseguradoras' ? 'active' : ''}
            name="aseguradoras"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {info.aseguradoras.title}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="ServicesCard-container-Card-Header-Item">
          <Nav.Link
            className={Content === 'residencias' ? 'active' : ''}
            name="residencias"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {info.residencias.title}
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Collapse in={open} dimension="width">
        <Card className="ServicesCard-container-Card">
          <Card.Body className="ServicesCard-container-Card-Body">
            <Card.Title>
              <img
                className="ServicesCard-container-Card-img"
                src={Adultos}
                alt="Card pic"
              ></img>
            </Card.Title>
            <Card.Text className="ServicesCard-container-Card-info">
              <h1>Te brindamos...</h1>
              <ul>
                {infor.services.map((item) => {
                  return <li>{item.name}</li>;
                })}
              </ul>
              {/* <h1>{infor.title}</h1>
              <h4>{infor.subtitle}</h4>
              <p>{infor.desc}</p> */}
              <Button>Solicita mas informacion</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Collapse>
    </div>
  );
};
