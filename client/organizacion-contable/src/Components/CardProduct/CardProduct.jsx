import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {Link, useNavigate} from 'react-router-dom';
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';
import ImgUri from '../../Assets/Images/outofstock.png'

import './CardProduct.css'

function CardProduct ({id,name,price,imgUri,addToCart,brands,quantity}){
    const navigate = useNavigate();
    const dispatch = useDispatch();


    return (
        
        <>
        {quantity <= 0   ? (
            <div className="card18 out-of-stock">


            <div className="container__product-detail">
           
            <div className="page-wrapper">
            
                <div className="row">
                    <div className="el-wrapper">
                    <Link to={`/detalle/${id}`}>
                        <div className="box-up">
                        <img src={ImgUri} alt="asdsd" className="outofstockimg"/>
                        
                        
                            
                            <div className="img-info">
                                <div className="info-inner">
                                    <span className="p-name">{name.toUpperCase()}</span>

                                </div>
                                <div className="a-size">
                                    <p className="size">{brands}</p>
                                    <p className="size">Stock: {quantity}</p>
                                </div>

                            </div>
                            
                        </div>
                        </Link>
                        
                        <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner"></div>
                            </div>
                            <p className="cart" href="#">
                                <span className="price">${price}</span>
                                <span className="add-to-cart">
                                    <Link to="/cart">
                                        <span className="txt" onClick={() => addToCart(id)}>Añadir al carrito</span>
                                    </Link>
                                </span>
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
        </div>

    ): (<div className="container__product-detail">
    <div className="page-wrapper">
        <div className="row">
            <div className="el-wrapper">
                <div className="box-up">
                    <img className="img-card" src={imgUri} alt="" />
                    <Link to={`/detalle/${id}`}>
                    <div className="img-info">
                        <div className="info-inner">
                            <span className="p-name">{name.toUpperCase()}</span>

                        </div>
                        <div className="a-size">
                            <p className="size">{brands}</p>
                            <p className="size">Stock: {quantity}</p>
                        </div>

                    </div>

                 </Link>
                </div>

                <div className="box-down">
                    <div className="h-bg">
                        <div className="h-bg-inner"></div>
                    </div>
                    <p className="cart" href="#">
                        <span className="price">${price}</span>
                        <span className="add-to-cart">
                            <Link to="/cart">
                                <span className="txt" onClick={() => addToCart(id)}>Añadir al carrito</span>
                            </Link>
                        </span>
                    </p>
                </div>

            </div>
        </div>

    </div>

</div>)

}
    
</>
)
}

export default CardProduct