/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/named */
/* eslint-disable no-useless-escape */

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';
import imgFooter from '../../Assets/Images/logofinalfinal.png';
import axios from 'axios';
import './Footer.css';

function Footer() {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({});
  const [isSubmited, setSubmited] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setSubmited(true);
      await axios.post(`/newsletter`, input);

      Swal.fire({
        customClass: {
          confirmButton: 'confirmBtnSwal',
        },
        title: 'Suscripción Exitosa',
        text: 'A partir de ahora recibirás todas nuestras novedades',
        imageUrl:
          'https://res.cloudinary.com/dc8w6pspj/image/upload/v1662498810/sucess_otelvh.png',
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Logo',
      });
      setErrors({ email: '' });
    } catch (error) {
      let imgUrl =
        'https://res.cloudinary.com/dc8w6pspj/image/upload/v1662498810/denied_anoxya.png';
      const msg = error.response.data.error;
      let title = 'Oops...';

      if (typeof msg === 'string' && msg === 'El email ya está suscripto!') {
        imgUrl =
          'https://res.cloudinary.com/dc8w6pspj/image/upload/v1662498810/warning_tjpeqz.png';
        title = '';
      }

      Swal.fire({
        customClass: {
          confirmButton: 'confirmBtnSwal',
        },
        title,
        text: typeof msg !== 'string' ? 'Error al enviar el newsletter!' : msg,
        imageUrl: imgUrl,
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Logo henrys',
      });
    } finally {
      setInput({ email: '' });
      setSubmited(false);
    }
  }

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(validate({ ...input, [e.target.name]: e.target.value }));
  }

  function validate(input) {
    let errors = {};

    if (!input.email) {
      errors.email = '* El email es obligatorio!';
    } else if (
      !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        input.email
      )
    ) {
      errors.email = '* Dirección de email inválida!';
    }

    return errors;
  }

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a
        className="footer__mail__link"
        href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}
      >
        {props.children}
      </a>
    );
  }
  return (
    <Container fluid fixed="bottom" className="footer__container">
      <Nav className="footer__nav">
        <Row className="pt-5">
          <Col sm={12} lg={4}>
            <p className="pt-3">
              Recibe todas las novedades, promociones y descuentos:
            </p>
            <form
              className="pb-3"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <input
                name="email"
                type="email"
                value={input.email}
                onChange={(e) => handleChange(e)}
                placeholder="ejemplo@ejemplo.com"
              />
              <input
                type="submit"
                value="Suscribirme"
                className="footer__btn__suscribe"
                disabled={
                  Object.keys(errors).length > 0 || !input.email || isSubmited
                }
              />
              <div>
                {errors.email && (
                  <p className="footer__newsletter__error">{errors.email}</p>
                )}
              </div>
            </form>
          </Col>
          <Col sm={12} lg={4} className="p-3">
            <div className="footer__logo-lema">
              <Link to="/">
                <img src={imgFooter} className="nav-img" alt=" logo" />
              </Link>
              <h4>"El mundo en tus manos"</h4>
            </div>
          </Col>
          <Col sm={12} lg={4} className="p-3">
            <p>Seguinos:</p>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
            <Mailto
              email="3jotashop@gmail.com"
              subject="Contacto via Email"
              body="Hola! Quisiera recbir información con respecto a"
            >
              <p>3jotashop@gmail</p>
            </Mailto>
          </Col>
        </Row>
      </Nav>
    </Container>
  );
}

export default Footer;
