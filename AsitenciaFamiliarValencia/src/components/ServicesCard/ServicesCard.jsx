import React, { useState } from 'react';
import { Card, Nav, Button, Collapse } from 'react-bootstrap';
import Adultos from '../../assets/adultos-mayores.png';
import { motion } from 'framer-motion';
import './ServicesCard.scss';

const info = {
  adults: {
    title: 'Adultos Mayores',
    desc: 'La atención en el domicilio de un adulto mayor dependiente constituye el mejor ámbito de asistencia. La seguridad que brinda la propia casa, la familiaridad en el espacio y su comodidad crean el marco ideal, donde nuestro personal de asistencia cubrirá todas las necesidades que requiera el cliente...',
    services: [
      {
        name: 'Acompañamientos médicos ambulatorios (desde domicilio/residencia)',
      },
      {
        name: 'Acompañamientos en estadías hospitalarias (diurnas/nocturnas)',
      },
      { name: 'Auxiliares gerontológicos en domicilio' },
      {
        name: 'Acompañamientos para personas con déficits de memoria (Personal especializado en prevención y promoción de la autonomía personal)',
      },
      {
        name: 'Tratamientos en domicilios: Fisioterapia /Terapia Ocupacional/ Osteopatía/Podología/Enfermería',
      },
      {
        name: 'Ayuda doméstica: pequeñas tareas instrumentales de la vida diaria / Limpieza profunda',
      },
      { name: 'Servicio de Internacion' },
      {
        name: 'Spa en casa: peluquería, manicuría/pedicuría, masajes descontracturantes, drenaje linfático, cosmetología.',
      },
    ],
  },
  child: {
    title: 'Infancias y Adolescencia',
    subtitle: 'Etapa fundamental en la vida de las personas',
    desc: 'Es durante la infancia que se desarrolla su potencial, su salud tanto física como emocional para a vida adulta. Por ello, es una etapa fundamental en la vida de las personas. Así como, una infancia sana y feliz en un ambiente acogedor genera a un adulto integro...',
    services: [
      {
        name: 'Servicio de Canguro (en el idioma que prefieras)',
      },
      {
        name: 'Apoyo escolar primaria y ESO',
      },
      { name: 'Apoyo escolar de inglés (domicilio)' },
      {
        name: 'Grupos recreativos de acuerdo a edades y zona de domicilio',
      },
      {
        name: 'Ayuda doméstica',
      },
      {
        name: 'Ayuda en la organización y preparación de viandas',
      },
      { name: 'Acompañamiento a citas médicas, terapias' },
      {
        name: 'Acompañamiento terapéutico',
      },
      {
        name: 'Organización de Eventos (Cumpleaños, bautizos, comuniones)',
      },
      {
        name: 'Servicio de Canguro durante vacaciones',
      },
    ],
  },
  newBorn: {
    title: 'New Family',
    subtitle: 'Acompañamiento a personas gestantes',
    desc: 'Nuestro servicio dirigido exclusivamente a la mujer embarazada, persona gestante y nuevas familias abarca todo tipo de asistencia, contención, información, actividades que una mujer y en consecuencia su entorno, necesitan en este período tan importante...',
    services: [
      {
        name: 'Doulas (online o presencial)',
      },
      {
        name: 'Matronas',
      },
      { name: 'Grupo de gestantes' },
      {
        name: 'Gimnasia Adaptada',
      },
      {
        name: 'Yoga preparto (Online)',
      },
      {
        name: 'Ayuda domestica',
      },
      { name: 'Servicio de canguro para hermanos' },
      {
        name: 'Acompañamiento a citas medicas',
      },
      {
        name: 'Acompañamiento de internacion',
      },
      {
        name: 'Servicio de nursery durante el primer mes del bebe (apoyo a mamá y al recién nacido)',
      },
    ],
  },
};
export const ServicesCard = () => {
  const [Content, setContent] = useState('adults');
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
  if (Content === 'adults') {
    infor = info.adults;
  } else if (Content === 'child') {
    infor = info.child;
  } else if (Content === 'newFamily') {
    infor = info.newBorn;
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
            className={Content === 'adults' ? 'active' : ''}
            name="adults"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {info.adults.title}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="ServicesCard-container-Card-Header-Item">
          <Nav.Link
            className={Content === 'child' ? 'active' : ''}
            name="child"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {info.child.title}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="ServicesCard-container-Card-Header-Item">
          <Nav.Link
            className={Content === 'newFamily' ? 'active' : ''}
            name="newFamily"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            {info.newBorn.title}
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
              <Button>Solicita presupuesto</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Collapse>
    </div>
  );
};
