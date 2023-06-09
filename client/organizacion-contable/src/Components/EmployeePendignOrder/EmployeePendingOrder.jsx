import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Factura from '../Factura/Factura'





import './EmployeePendingOrder.css';
import { getOrders } from '../../Redux/actions/actions';

function EmployeePendingOrder() {
  const dispatch = useDispatch();
  const [isSubmited, setSubmited] = useState(false);
  const orders = useSelector((state) =>state.orders);
  const [mostrarVentana,setMostrarVentana] = useState(false)
  
  const [show, setShow] = useState(false);
  const [orderId, setOrderId] = useState('');
  const handleClose = () => setShow(false);
  function handleShow(e) {
    setOrderId(e.target.value);
    setShow(true);
  }

  useEffect(() => {
    dispatch(getOrders());
},[dispatch])

  const abrirVentana = () => {
    setMostrarVentana(true);
  }

  const cerrarVentana = () => {
    setMostrarVentana(false);
  };

  return (
    <div className="employee__pending__container mt-5">
      <h2>
        <div className="employee__cardList" />
        Gestionar pedidos Pendientes
      </h2>
      <hr />
      <Container>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Productos</th>
              <th>Total</th>
              <th>Facturas</th>
            </tr>
          </thead>
          <tbody>
          {
  orders.map((ord, i) => (
    <React.Fragment key={i}>
      <tr>
        <td>{ord.fecha}</td>
        <td>
          <ul className="employee__ul">
            
              {ord.cart.map((item, j) => (
                <li key={j}>
                  <span className="employee__li__span">{item.name}</span>
                  <br />
                  Cantidad: {item.quantity}
                  <hr />
                </li>
              ))}
          </ul>
        </td>
        <td>$ {ord.precioTotal}</td>
        <td>
          <Button
            value={ord.id}
            variant="primary"
            onClick={() => abrirVentana(ord.id)}
          >
            Ver
          </Button>
        </td>
      </tr>
      <Factura mostrarVentana={mostrarVentana} ord={ord} cerrarVentana={cerrarVentana}/>
      
    </React.Fragment>
  ))}
          </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmar Estado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ¿Estás seguro de pasar éste pedido se encuentra listo?
          </Modal.Body>
          <Modal.Footer>
            <Button
              id={orders.id}
              onClick={abrirVentana}
              disabled={isSubmited}
              variant="primary"
            >
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      

    </div>
  );
}

export default EmployeePendingOrder;
