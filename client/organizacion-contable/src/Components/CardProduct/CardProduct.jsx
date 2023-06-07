import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {Link, useNavigate} from 'react-router-dom';
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';

import './CardProduct.css'

function CardProduct ({id,name,price,imgUri,addToCart,brands}){
    const navigate = useNavigate();
    const dispatch = useDispatch();


    return (
        <div className="container__product-detail">
            <div className="page-wrapper">
                <div className="row">
                    <div className="el-wrapper">
                        <div className="box-up">
                            <img className="img-card" src={imgUri} alt="" />
                            <div className="img-info">
                                <div className="info-inner">
                                    <span className="p-name">{name.toUpperCase()}</span>

                                </div>
                                <div className="a-size">
                                    <span className="size">{brands}</span>
                                </div>

                            </div>

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

        </div>
    )
}

export default CardProduct