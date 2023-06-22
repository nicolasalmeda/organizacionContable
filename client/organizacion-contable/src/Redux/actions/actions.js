import { get, create, edit, eliminar } from '../../Components/requests';

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_PRODUCT_CART = 'DELETE_PRODUCT_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const DELETE_ONE_PRODUCT_CART = 'DELETE_ONE_PRODUCT_CART';
export const SAVE_ORDER = 'SAVE_ORDER';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const GET_ORDERS = 'GET_ORDERS'
export const CLEAR_STATE = 'CLEAR_STATE';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID'
export const DELETE_PRODUCT = "DELETE_PRODUCT"



export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const response = await get('productos')
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

export const saveOrder =  (order) => {
  return async () => {
    try {
      const response = await create('pedidos',order)
      return console.log(response);
    } catch (error) {
      console.log(error)
    }
  }
 
}

export const editProduct = (cart) => {
  return async () => {
    try{
      const response = await edit('editarProductos',cart)
      return console.log(response);
    } catch(error){
      console.log(error)
    }
  }
}
export const getOrders = () => {
  return async (dispatch) => {
    try {
      const response = await get('pedidos')
      dispatch({
        type: GET_ORDERS,
        payload: response.data,
      })
    } catch(error){
      dispatch({
        type:  GET_ORDERS,
        payload: error.message,
      })
    }  }
} 

export function clearState(payload) {
  return {
    type: CLEAR_STATE,
    payload,
  };
}

export function getProductById(id) {
  return async function (dispatch) {
    const json = await get(`productosById/${id}`);
    try {
      return dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
  };
}
}

export function deleteProduct(id){
  return async function (dispatch){
    try{
      await eliminar( `deleteProductById/${id}`)
      return dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      })
    }catch(error){
      console.log(error)

    }
  }
}
