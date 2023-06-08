import axios from 'axios';

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_PRODUCT_CART = 'DELETE_PRODUCT_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const DELETE_ONE_PRODUCT_CART = 'DELETE_ONE_PRODUCT_CART';



export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get( 'http://localhost:3001/api/productos')
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response.data,
      })
    } catch(error){
      dispatch({
        type:  GET_ALL_PRODUCTS,
        payload: error.message,
      })
    }  }
} 

export const addCartProduct = (payload) => {
  return {
    type: ADD_TO_CART,
    payload: payload,
  }
}

export function deleteCart(payload) {
  return {
    type: CLEAR_CART,
    payload: payload,
  };
}


export function allProductsDelete(id) {
  return {
    type: DELETE_PRODUCT_CART,
    payload: id,
  };
}

export function productDelete (id) {
  let payload = {};
  
  payload = {
    idtelefono : id
  };

  return {
    type: DELETE_ONE_PRODUCT_CART,
    payload: payload
  }

}