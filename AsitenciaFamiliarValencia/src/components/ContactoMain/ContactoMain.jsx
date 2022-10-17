import { send } from 'emailjs-com';
import React, { useRef, useState } from 'react';
import { Button, Form, FormControl, Overlay, Tooltip } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import './ContactoMain.scss';
import logo from '../../assets/valencia.png';

export const ContactoMain = () => {
  const { search } = useLocation();
  const topic = search.slice(8, 50).replace('%20', ' ');
  //console.log(search.slice(8, 50).replace('%20', ' '));
  const [Disabled, setDisabled] = useState(true);
  const [Input, setInput] = useState({
    nombre: '',
    email: '',
    empresa: '',
    asunto: topic ? topic : '',
    desc: '',
  });
  const [FormError, setFormError] = useState({
    nombre: 'Completa aqui',
    email: 'Completa aqui',
    empresa: 'Completa aqui',
    asunto: 'Completa aqui',
    desc: 'Completa aqui',
  });
  const [show, setShow] = useState({
    nombre: false,
    email: false,
    empresa: false,
    asunto: false,
    desc: false,
  });
  const [showToastSuccess, setShowToastSuccess] = useState(false);
  const [showToastError, setShowToastError] = useState(false);

  const targetNombre = useRef();
  const targetEmail = useRef();
  const targetEmpresa = useRef();
  const targetAsunto = useRef();
  const targetDesc = useRef();

  function exists(str) {
    if (str === undefined) {
      return false;
    }
    if (str.length > 0) return true;
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
    if (data.nombre && validName(data.nombre) === true) {
      errors.nombre = 'El nombre ingresado no es valido';
    }

    if (data.email && validEmail(data.email) === true) {
      errors.email = 'El email tiene un formato incorrecto';
    }

    if (data.empresa && validCompany(data.empresa) === true) {
      errors.empresa = 'El nombre de la empresa es invalido';
    }

    if (data.asunto && validTopic(data.asunto) === true) {
      errors.asunto = 'El asunto de tu consulta tiene un formato incorrecto';
    }

    if (data.desc && validDesc(data.desc) === true) {
      errors.desc = 'Añade un texto mas largo/corto';
    }
    return errors;
  }
  const handleChange = (e) => {
    setInput({ ...Input, [e.target.name]: e.target.value });
    setFormError(validate({ ...Input, [e.target.name]: e.target.value }));
    setTimeout(() => {
      if (
        exists(Input.nombre) &&
        exists(Input.email) &&
        exists(Input.empresa) &&
        exists(Input.asunto) &&
        exists(Input.desc)
      ) {
        setDisabled(false);
      }
      if (
        exists(FormError.nombre) ||
        exists(FormError.email) ||
        exists(FormError.empresa) ||
        exists(FormError.asunto) ||
        exists(FormError.desc)
      ) {
        setDisabled(true);
      }
    }, 1000);
  };
  const handleShow = (e) => {
    console.log(show[e.target.name]);
    if (show[e.target.name] === false) {
      setShow({ ...show, [e.target.name]: true });
    } else {
      setShow({ ...show, [e.target.name]: false });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      exists(Input.nombre) &&
      exists(Input.email) &&
      exists(Input.empresa) &&
      exists(Input.asunto) &&
      exists(Input.desc) &&
      !exists(FormError.nombre) &&
      !exists(FormError.email) &&
      !exists(FormError.empresa) &&
      !exists(FormError.asunto) &&
      !exists(FormError.desc)
    ) {
      const toSend = {
        to_name: 'Valencia Assist',
        from_name: Input.nombre,
        from_email: Input.email,
        from_empresa: Input.empresa,
        message: Input.desc,
        from_asunto: Input.asunto,
      };
      send('service_ij860q9', 'contact_form', toSend, 'hUXrAnQwoTXnULHls')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
      setInput({
        nombre: '',
        email: '',
        empresa: '',
        asunto: '',
        desc: '',
      });
      setShowToastSuccess(true);
      setDisabled(true);
    } else {
      // alert('Alguno de los campos esta incompleto o es invalido');
      setShowToastError(true);
      setDisabled(true);
    }
  };

  return (
    <div className="Contacto-container">
      <div className="Contacto-container-leftside">
        <Form className="Contacto-Form">
          <Form.Group className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              ref={targetNombre}
              type="text"
              name="nombre"
              value={Input.nombre}
              onBlur={(e) => handleShow(e)}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Ej: Silvia Gutierrez"
            ></Form.Control>
          </Form.Group>
          {FormError.nombre ? (
            <Overlay
              target={targetNombre.current}
              show={show.nombre}
              placement="bottom"
            >
              {(props) => (
                <Tooltip className="bootstrap-tooltip" id="overlay" {...props}>
                  {FormError.nombre}
                </Tooltip>
              )}
            </Overlay>
          ) : (
            false
          )}
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              ref={targetEmail}
              type="email"
              name="email"
              value={Input.email}
              onBlur={(e) => handleShow(e)}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Ej: Silvia Gutierrez"
            ></Form.Control>
          </Form.Group>
          {FormError.email ? (
            <Overlay
              target={targetEmail.current}
              show={show.email}
              placement="bottom"
            >
              {(props) => (
                <Tooltip className="bootstrap-tooltip" id="overlay" {...props}>
                  {FormError.email}
                </Tooltip>
              )}
            </Overlay>
          ) : (
            false
          )}
          <Form.Group className="mb-2">
            <Form.Label>Empresa</Form.Label>
            <Form.Control
              ref={targetEmpresa}
              onBlur={(e) => handleShow(e)}
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
            <Overlay
              target={targetEmpresa.current}
              show={show.empresa}
              placement="bottom"
            >
              {(props) => (
                <Tooltip className="bootstrap-tooltip" id="overlay" {...props}>
                  {FormError.empresa}
                </Tooltip>
              )}
            </Overlay>
          ) : (
            false
          )}
          <Form.Group className="mb-2">
            <Form.Label>Asunto</Form.Label>
            <Form.Control
              ref={targetAsunto}
              onBlur={(e) => handleShow(e)}
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
            <Overlay
              target={targetAsunto.current}
              show={show.asunto}
              placement="bottom"
            >
              {(props) => (
                <Tooltip className="bootstrap-tooltip" id="overlay" {...props}>
                  {FormError.asunto}
                </Tooltip>
              )}
            </Overlay>
          ) : (
            false
          )}
          <Form.Group className="mb-2">
            <Form.Label>Consulta</Form.Label>
            <Form.Control
              as="textarea"
              name="desc"
              ref={targetDesc}
              value={Input.desc}
              onBlur={(e) => handleShow(e)}
              onChange={(e) => {
                handleChange(e);
              }}
              className="Form-Textarea"
              placeholder="Escribi aca tu consulta!"
            ></Form.Control>
          </Form.Group>
          {FormError.desc ? (
            <Overlay
              target={targetDesc.current}
              show={show.desc}
              placement="bottom"
            >
              {(props) => (
                <Tooltip className="bootstrap-tooltip" id="overlay" {...props}>
                  {FormError.desc}
                </Tooltip>
              )}
            </Overlay>
          ) : (
            false
          )}
          <button
            className="Form-submit-btn"
            onClick={(e) => {
              handleSubmit(e);
            }}
            style={
              !Disabled
                ? { backgroundColor: '#d98721', color: 'black' }
                : { backgroundColor: 'grey', color: 'white' }
            }
            disabled={Disabled}
          >
            Enviar
          </button>
        </Form>
      </div>
      <div className="Contacto-container-rightside">
        <ToastContainer position="bottom-end" className="m-2">
          <Toast
            onClose={() => setShowToastSuccess(false)}
            show={showToastSuccess}
            delay={4000}
            autohide
          >
            <Toast.Header>
              <img src={logo} className="rounded me-2 logo-shape" alt="" />
              <strong className="me-auto">Valencia Assist</strong>
              <small>Hace un momento</small>
            </Toast.Header>
            <Toast.Body className="toast-body">
              Tu consulta se ha enviado correctamente. <br />
              Pronto nos comunicaremos contigo!
            </Toast.Body>
          </Toast>
        </ToastContainer>
        <ToastContainer position="bottom-end" className="m-2">
          <Toast
            onClose={() => setShowToastError(false)}
            show={showToastError}
            delay={4000}
            autohide
          >
            <Toast.Header>
              <img src={logo} className="rounded me-2 logo-shape" alt="" />
              <strong className="me-auto">Valencia Assist</strong>
              <small>Hace un momento</small>
            </Toast.Header>
            <Toast.Body className="toast-body">
              Alguno de los campos esta incompleto o es invalido. <br />
              Intenta nuevamente.
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </div>
  );
};
