import axios from 'axios';

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const ADD_TO_CART = 'ADD_TO_CART';

export function getProduct() {
    return async function(dispatch){
        const json = await axios('/api/productos');
        console.log(json)
        
    try{
        return dispatch({
            type: GET_PRODUCT,
            payload: json.data,
        });
    }catch(error){
        console.log(error);
    }
    };
}

export function addCartProduct(payload){
    return {
        type: ADD_TO_CART,
        payload: payload,
    };
}

