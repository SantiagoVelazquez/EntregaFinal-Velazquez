import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBarComponent.css'
import { Link } from 'react-router-dom';
import { CartWidgetComponent } from '../CartWidgetComponent';

export const NavBarComponent = () => {

    return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Link to="/">
        <img src="../multimedia/img/Logo.png" alt="Logo de la empresa" className='logo'/>
      </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Inicio</Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to={"/category/laptops"}>Laptops</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to={"/category/smartphones"}>Smartphones</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent />
      </Container>
    </Navbar>
  );
}