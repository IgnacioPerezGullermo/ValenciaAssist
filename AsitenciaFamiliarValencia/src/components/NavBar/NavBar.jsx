import React from 'react';
import Logo from '../../assets/valencia-logo2.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = () => {
  return (
    <>
      <Navbar expand="md" className="navbar">
        <Container className="navbar-container">
          <Navbar.Brand href="#home">
            <img className="navLogo" src={Logo} alt="logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navLinks">
                <Link to="/">Inicio</Link>
              </Nav.Link>
              <NavDropdown
                className="navLinks"
                title="Servicios"
                id="basic-nav-dropdown"
                color={'#08bd9a'}
              >
                <Link to="/ServiciosFamilia">
                  <NavDropdown.Item href="#action/3.1" className="navLinksDrop">
                    Para Familias
                  </NavDropdown.Item>
                </Link>
                <Link to="/ServiciosEmpresas">
                  <NavDropdown.Item href="#action/3.2" className="navLinksDrop">
                    Para Empresas
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
              <NavDropdown
                className="navLinks"
                title="Tienda de recursos"
                id="basic-nav-dropdown"
                color={'#08bd9a'}
              >
                <Link to="/Cursos">
                  <NavDropdown.Item href="#action/3.1" className="navLinksDrop">
                    Cursos y formaciones
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="#action/3.2" className="navLinksDrop">
                  Citas de salud virtuales
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="navLinks" href="#link">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <a className="logo me-auto">
            <img src={Logo} alt="" className="img-fluid" />
          </a>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="active" href="#hero">
                  Inicio
                </a>
              </li>
              <li>
                <a href="familia.html">Servicios Familias</a>
              </li>
              <li>
                <a href="#">Servicios Empresas</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>

        <i className="bi bi-list mobile-nav-toggle"></i>
      </header> */}
    </>
  );
};
