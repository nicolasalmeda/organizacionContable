/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCartProduct,
  allProductsDelete,
  deleteCart,
  productDelete,
  saveOrder,
  editProduct,
} from '../../Redux/actions/actions';
import CardProductCart from '../CardProductCart/CardProductCart';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { PlusLg, DashLg } from 'react-bootstrap-icons';
import { Link} from 'react-router-dom';
import imgDefault from '../../Assets/Images/default.jpg';
import Swal from 'sweetalert2';

import './ShoppingCart.css';

function ShoppingCart() {
  const dispatch = useDispatch();
  let itemsToCart = useSelector((state) => state.cart);
  
  const today = new Date();
  const formatteDate = today.toLocaleDateString();
  

  const addToCart = (id) => {
    let payload = {};

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

  const handleOrder = () => {

    const order = {
      id: 0,
      cart: itemsToCart,
      precioTotal: total,
      envio: false,
      fecha: formatteDate
    }
    const cart = itemsToCart;
   

    dispatch(saveOrder(order));
    dispatch(editProduct(cart));
    dispatch(deleteCart(itemsToCart))
    Swal.fire({position: 'top-end',
            imageUrl: 'https://res.cloudinary.com/dc8w6pspj/image/upload/v1662498810/sucess_otelvh.png',
            imageWidth: 80,
            imageHeight: 80,
            text: 'Pedido enviado existosamente',
            showConfirmButton: false,
            timer: 2000,
            width: '12rem',
            heigh: '5rem',
            padding:'0.5rem',
        })

    console.log(order);
  }
  

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
                      quantity={item.quantity}
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
                <Button onClick={handleOrder} >Confirmar Pedido</Button>
            </div>
            <Link to="/">
              <Button >Seguir Comprando</Button>
            </Link>
          </div>
        </>
      )}
    </Container>
  );
}

export default ShoppingCart;
