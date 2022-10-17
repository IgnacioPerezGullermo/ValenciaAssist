import React from 'react';
import { Button } from 'react-bootstrap';
import Adultos from '../../assets/adultos-mayores.png';
import './SingleService.scss';

export const SingleService = ({ title, desc, services, img }) => {
  return (
    <div className="SingleService-Container">
      <div className="SingleService-Container-title">
        <h1>{title}</h1>
      </div>
      <div className="SingleService-Text">
        <p>{desc}</p>
        <ul>
          {services.map((item) => {
            return <li>{item.name}</li>;
          })}
        </ul>
        <Button className="SingleService-Button">Solicitar Presupuesto</Button>
      </div>
      <div className="SingleService-Image">
        <div className="SingleService-ImageCover"></div>
        <img src={img}></img>
      </div>
    </div>
  );
};
