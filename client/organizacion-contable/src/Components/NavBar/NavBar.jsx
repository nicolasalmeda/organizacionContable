import React from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartCheckFill } from 'react-bootstrap-icons';
import { Link, useLocation } from 'react-router-dom';
import imgNav from '../../Assets/Images/logofinalfinal.png';

import 'bootstrap/dist/css/bootstrap.min.css';

import './NavBar.css';


function NavBar() {
  const path = useLocation().pathname;
  function setScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }



  return (
    <>
      
      

     
        <Navbar className="navBar" expand="lg" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={imgNav} className="nav-img" alt="logo" />{' '}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link
                  className={
                    path === '/' ? 'linkActive' : 'navBar__users__link'
                  }
                  as={Link}
                  to="/"
                  onClick={setScrollToTop}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className={
                    path === '/pedidos' ? 'linkActive' : 'navBar__users__link'
                  }
                  as={Link}
                  to="/pedidos"
                  onClick={setScrollToTop}
                >
                  Pedidos
                </Nav.Link>

                <Nav.Link
                  className={
                    path === '/asientos' ? 'linkActive' : 'navBar__users__link'
                  }
                  as={Link}
                  to="/asientos"
                  onClick={setScrollToTop}
                >
                  Asientos
                </Nav.Link>
                <Nav.Link
                  className={
                    path === '/create' ? 'linkActive' : 'navBar__users__link'
                  }
                  as={Link}
                  to="/create"
                  onClick={setScrollToTop}
                >
                 Create
                </Nav.Link>
                <Nav.Link
                  className="ms-5 me-5"
                  as={Link}
                  to="/cart"
                  onClick={setScrollToTop}
                >
                  
                    <>
                      <CartCheckFill className="CartCheckFill" />
                      
                    </>
                </Nav.Link>
              </Nav>

              

              
                <Dropdown>
                  <Dropdown.Toggle className="nav__btn" id="dropdown-basic">
                    Ingresar
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.ItemText className="dropdown__link-btn">
                      <Link to="/userlogin">Iniciá Sesión</Link>
                    </Dropdown.ItemText>

                    <Dropdown.ItemText>
                      <Dropdown.Divider />
                      <span>¿No tenés cuenta?</span>
                      <Link to="/registeruser" className="navBar__registrate">
                        Registrate
                      </Link>
                    </Dropdown.ItemText>
                  </Dropdown.Menu>
                </Dropdown>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}



export default NavBar;
