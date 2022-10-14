import React, { useState } from 'react';
import { FormControl, Form, FormLabel, Button, Tooltip } from 'react-bootstrap';
import './ContactoMain.scss';

export const ContactoMain = () => {
  const [Input, setInput] = useState({
    nombre: '',
    email: '',
    empresa: '',
    asunto: '',
    desc: '',
  });
  const [FormError, setFormError] = useState({});

  function exists(str) {
    if (!str) return true;
    return false;
  }
  function validName(str) {
    if (str.length < 4 || str.length > 30) return true;
    if (typeof str !== 'string') return true;
    return false;
  }
  function validEmail(str) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)) return true;
    if (typeof str !== 'string') return true;
    return false;
  }
  function validCompany(str) {
    if (str.length < 4 || str.length > 50) return true;
    if (typeof str !== 'string') return true;
    return false;
  }
  function validTopic(str) {
    if (str.length < 1 || str.length > 40) return true;
    if (typeof str !== 'string') return true;
    return false;
  }
  function validDesc(str) {
    if (str.length < 10 || str.length > 400) return true;
    if (typeof str !== 'string') return true;
    return false;
  }
  function validate(data) {
    let errors = {};
    if (!data.nombre) {
      if (exists(data.nombre) === true) errors.nombre = 'Ingresa un nombre';
    }
    if (data.nombre && validName(data.nombre) === true) {
      errors.nombre = 'El nombre ingresado no es valido';
    }
    if (!data.email) {
      if (exists(data.email) === true) errors.email = 'Ingresa un mail';
    }
    if (data.email && validEmail(data.email) === true) {
      errors.email = 'El email tiene un formato incorrecto';
    }
    if (!data.empresa) {
      if (exists(data.empresa) === true)
        errors.empresa === 'Ingresa el nombre de tu empresa';
    }
    if (data.empresa && validCompany(data.empresa) === true) {
      errors.empresa = 'El nombre de la empresa es invalido';
    }
    if (!data.asunto) {
      if (exists(data.asunto) === true)
        errors.email = 'Añade un asunto para tu consulta';
    }
    if (data.asunto && validTopic(data.asunto) === true) {
      errors.asunto = 'El asunto de tu consulta tiene un formato incorrecto';
    }
    if (!data.desc) {
      if (exists(data.desc) === true) errors.desc = 'Añade un texto';
    }
    if (data.desc && validDesc(data.desc) === true) {
      errors.desc = 'Añade un texto mas largo/corto';
    }
    return errors;
  }
  const handleChange = (e) => {
    setInput({ ...Input, [e.target.name]: e.target.value });
    setFormError(validate({ ...Input, [e.target.name]: e.target.value }));
  };
  return (
    <div className="Contacto-container">
      <Form className="Contacto-Form">
        <Form.Group className="mb-2">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={Input.nombre}
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Ej: Silvia Gutierrez"
          ></Form.Control>
        </Form.Group>
        {FormError.nombre ? (
          <span style={{ fontSize: '1vw', color: 'red', marginLeft: '1vw' }}>
            {FormError.nombre}
          </span>
        ) : (
          false
        )}
        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={Input.email}
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Ej: Silvia Gutierrez"
          ></Form.Control>
        </Form.Group>
        {FormError.email ? (
          <span style={{ fontSize: '1vw', color: 'red', marginLeft: '1vw' }}>
            {FormError.email}
          </span>
        ) : (
          false
        )}
        <Form.Group className="mb-2">
          <Form.Label>Empresa</Form.Label>
          <Form.Control
            type="text"
            name="empresa"
            value={Input.empresa}
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Ej: Empresa Increible S.A."
          ></Form.Control>
        </Form.Group>
        {FormError.empresa ? (
          <span style={{ fontSize: '1vw', color: 'red', marginLeft: '1vw' }}>
            {FormError.empresa}
          </span>
        ) : (
          false
        )}
        <Form.Group className="mb-2">
          <Form.Label>Asunto</Form.Label>
          <Form.Control
            type="text"
            name="asunto"
            value={Input.asunto}
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Ej: Clases de Yoga"
          ></Form.Control>
        </Form.Group>
        {FormError.asunto ? (
          <span style={{ fontSize: '1vw', color: 'red', marginLeft: '1vw' }}>
            {FormError.asunto}
          </span>
        ) : (
          false
        )}
        <Form.Group className="mb-2">
          <Form.Label>Consulta</Form.Label>
          <Form.Control
            as="textarea"
            name="desc"
            value={Input.desc}
            onChange={(e) => {
              handleChange(e);
            }}
            className="Form-Textarea"
            placeholder="Escribi aca tu consulta!"
          ></Form.Control>
        </Form.Group>
        {FormError.desc ? (
          <span style={{ fontSize: '1vw', color: 'red', marginLeft: '1vw' }}>
            {FormError.desc}
          </span>
        ) : (
          false
        )}
        <Button className="Form-submit-btn">Enviar</Button>
      </Form>
    </div>
  );
};
