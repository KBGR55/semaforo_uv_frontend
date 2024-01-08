import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { borrarSesion } from '../utilidades/Sessionutil';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BarraMenu = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    return (
        <Navbar expand="lg" variant="fondo" className="navbar navbar-expand-lg">
            <div className='container-fluid'>
                <Navbar.Brand className="navbar-brand" href="/">SEMÁFORO UV</Navbar.Brand>
                <Navbar className="navbar-toggler fas fa-bars" aria-controls="offcanvasNavbar" onClick={() => setShowOffcanvas(!showOffcanvas)} />
                <div className="collapse navbar-collapse">
                    <NavLink classNameNav="navbar-nav ms-auto mb-2 mb-lg-0" />
                </div>
                <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end" target="#offcanvasNavbar">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>OPCIONES</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="offcanvas-body">
                        <NavLink classNameNav="navbar-nav justify-content-end flex-grow-1 pe-3" />
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </Navbar>
    );
};

export default BarraMenu;

const NavLink = ({ classNameNav}) => {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleCerrarSesion = () => {
        borrarSesion();
        navigate('/');
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        // El className se utiliza en el componente Nav
        <Nav className={classNameNav}>
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/radiacion">Radiacion UV</Nav.Link>
            <Nav.Link href="/api">Api</Nav.Link>
            <li className="nav-item dropdown" onClick={toggleDropdown}>
                <span className="nav-link">Mi cuenta</span>
                <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                    <Nav.Link href="/registro" className="dropdown-item" >Registrarse</Nav.Link>
                    <Nav.Link href="/iniciar-sesion" className="dropdown-item" >Iniciar sesión</Nav.Link>
                </ul>
            </li>
            <Nav.Link href="/" onClick={handleCerrarSesion}>Cerrar sesión</Nav.Link>
        </Nav>
    );
};
