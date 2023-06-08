/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCartProduct,
  allProductsDelete,
  deleteCart,
  productDelete,
} from '../../Redux/actions/actions';
import CardProductCart from '../CardProductCart/CardProductCart';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { PlusLg, DashLg, Trash, Windows } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import imgDefault from '../../Assets/Images/default.jpg';

import axios from 'axios';
import Swal from 'sweetalert2';

import './ShoppingCart.css';

function ShoppingCart() {
  const dispatch = useDispatch();
  let itemsToCart = useSelector((state) => state.cart);
  const [mount, setMount] = useState(true);
  const [idtel, setIdtel] = useState(0);
  const navigate = useNavigate();
  
  const [discount, setDiscount] = useState(0);
  const [note, setNote] = useState('');
  const [filterCarrito, setFilterCarrito] = useState();
  
  

  useEffect(() => {
    //console.log(filterCarrito);
    // console.log(itemsToCart);
  }, [itemsToCart]);

  useEffect(() => {
    if (!mount) {
      if (itemsToCart && itemsToCart.length) {
        window.localStorage.setItem('carrito', JSON.stringify(itemsToCart));
        // const userid = JSON.parse(window.localStorage.getItem('user'));
        // const comprajson = JSON.parse(window.localStorage.getItem('carrito'));
        // console.log(userid.id);
        // const comprauser = [...comprajson, userid.id];
        // console.log(comprauser);
      } else {
        window.localStorage.removeItem('carrito');
        window.localStorage.removeItem('compra');
      }
    } else {
      setMount(false);
    }
  }, [dispatch, itemsToCart, mount]);

  const addToCart = (id) => {
    let payload = {};
    setIdtel(id)

    payload = {
        idtelefono: id,
     }
    
    dispatch(addCartProduct(payload));
    Swal.fire({
      position: 'top-end',
      target: '#custom-target',
      // imageUrl:
      //   'https://www.pngitem.com/pimgs/m/423-4236284_png-images-success-icon-png-transparent-png-download.png',
      icon: 'success',
      imageWidth: 80,
      imageHeight: 80,
      text: 'Producto agregado exitosamente',
      showConfirmButton: false,
      timer: 900,
      width: '18rem',
      height: '5rem',
      padding: '0.5rem',
      toast: true,
      customClass: {},
    });
  };

  const handleDelete = (id, all = false) => {
    if (all) {
      dispatch(allProductsDelete(id));
    } else {
      dispatch(productDelete(id));
      Swal.fire({
        position: 'top-end',
        // imageUrl:
        //   'https://w7.pngwing.com/pngs/598/31/png-transparent-orange-x-sign-computer-icons-x-mark-red-x-mark-miscellaneous-angle-text.png',
        icon: 'error',
        imageWidth: 80,
        imageHeight: 80,
        text: 'Producto eliminado exitosamente',
        showConfirmButton: false,
        timer: 800,
        width: '18rem',
        height: '5rem',
        padding: '0.5rem',
        toast: true,
      });
    }
  };



  let total = Object.values(itemsToCart).reduce(
    (acc, { price, cantidad }) => acc + price * cantidad,
    0
  );

  console.log('final', itemsToCart );


  return (
    <Container className="py-4 ">
      {itemsToCart && itemsToCart?.length === 0 ? (
        <div className="cartEmpty__container">
          <div className="cartEmpty__text">
            <h2>El carrito se encuentra vacío</h2>
            <p>Sigue en nuestro menu para ver más opciones</p>
            <Link to="/" >
              <Button>Ir al Menú</Button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-5">
            <h1>Mi Carrito</h1>
          </div>
          <hr />
          <div className="shoppinCart__container">
            <div className="productsCard__container">
              {itemsToCart?.map((item,index) => (
                <div key={index}>
                  {
                    <CardProductCart
                      id={item.id}
                      name={item.name}
                      cantidad={item.cantidad}
                      price={item.price}
                      imgUri={item.image || imgDefault}
                    />
                  }
                  <div>
                    <Button
                      className="productCart__btn"
                      type="button"
                      onClick={() => addToCart(item.id)}
                      disabled={item.cantidad === item.quantity ? true : false}
                    >
                      <PlusLg />
                    </Button>
                    <Button
                      className="productCart__btn"
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      disabled={item.cantidad === 1 ? true : false}
                    >
                      <DashLg />
                    </Button>
                    <Button
                      className="productCart__btn"
                      type="button"
                    >
                      Quitar Producto
                    </Button>
                    <span id="existencias-carrito">
                      Stock:{' '}
                      {item.cantidad === item.quantity ? (
                        <span id="sin-existencias">Sin existencias</span>
                      ) : (
                        <span id="disponible">Disponible</span>
                      )}
                    </span>
                  </div>
                  <hr />
                </div>
              ))}
            </div>

            <div className="shoppingCart__total__container">
            <h2 className="shoppingCart__h2 mb-4">
                  <strong>Total de mi compra:</strong>
                  <span> {`$${' ' + (total ).toFixed(2)}`}</span>
                </h2>
                <Button>Confirmar Pago</Button>
            </div>
            <Link to="/">
              <Button>Seguir Comprando</Button>
            </Link>
          </div>
        </>
      )}
    </Container>
  );
}

export default ShoppingCart;
