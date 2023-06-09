import React from "react";
import Button from 'react-bootstrap/Button';

const Factura = ({mostrarVentana,ord,cerrarVentana}) => {
  return (
    <>
    {mostrarVentana && (
      <div className="factura">
      <div className="encabezado">
        <h1>Factura Tipo B</h1>
        <h2>3J e-commerce</h2>
        <p>Fecha: {ord.fecha}</p>
        <p>Cuit: 33-45454545-9</p>
        <p>Ing. Brutos: 33-45454545</p>
        <p>Inicio de Activ. 5/06/23</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Precio Unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {ord.cart.map((producto, index) => (
            <tr key={index}>
              <td>{producto.quantity}</td>
              <td>{producto.name}</td>
              <td>{producto.price}</td>
              <td>{producto.quantity * producto.price}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td> {ord.precioTotal}</td>
          </tr>
        </tbody>
      </table>
      
      <Button onClick={cerrarVentana} variant="primary">Cerrar Ventana</Button> 
    </div>

    
   
  )}

  
  </>
  )
}

export default Factura;