import {React,useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllProducts,addCartProduct} from '../../Redux/actions/actions';
import CardProduct from '../CardProduct/CardProduct';
import  Container  from 'react-bootstrap/Container';
import './ProductsContainer.css';
import Swal from 'sweetalert2';

function ProductsContainer(){
    const dispatch = useDispatch();
    let itemsToCart = useSelector((state) => state.cart)
    const allProducts = useSelector((state) => state.products)
    const [mount,setMount] = useState(true);
    

    useEffect(() => {
        if(!mount){
            if(itemsToCart&& itemsToCart.length){
                window.localStorage.setItem('carrito',JSON.stringify(itemsToCart));
            } else {
                window.localStorage.removeItem('carrito');
            }
            } else {
                setMount(false);
            }
        },[dispatch,itemsToCart,mount]);

        useEffect(() => {
            dispatch(getAllProducts());
        },[dispatch])

        const addToCart = (id) => {
            let payload = {};
            payload = {
                idtelefono: id
            }

            
            dispatch(addCartProduct(payload));
            Swal.fire({position: 'top-end',
            imageUrl: 'https://res.cloudinary.com/dc8w6pspj/image/upload/v1662498810/sucess_otelvh.png',
            imageWidth: 80,
            imageHeight: 80,
            text: 'Producto agregado existosamente',
            showConfirmButton: false,
            timer: 800,
            width: '12rem',
            heigh: '5rem',
            padding:'0.5rem',
        })
        }

      

    return (
        <div>
            <Container className='products__container__menu mt-3'>
            {   allProducts.length ? (
                    allProducts.map((item) =>(
                        <CardProduct
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        imgUri={item.image}
                        brands={item.brands}
                        quantity={item.quantity}
                        key={item.name}
                        addToCart={addToCart} />
                    ))
                ) : (<h2>Lo Sentimos!</h2>)
                }
            </Container>

        </div>
    )

        
    }

    export default ProductsContainer;
