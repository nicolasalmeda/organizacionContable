import { GET_ALL_PRODUCTS,ADD_TO_CART,DELETE_PRODUCT_CART, DELETE_ONE_PRODUCT_CART } from "../actions/actions";
import {addItem, deleteAllItem,deleteItem} from './utils'

const initialState = {
  products: [],
  error:null,
  cart:[]
}

const reducer = (state = initialState,action) => {
  // console.log(action.payload)
    switch(action.type) {
      case GET_ALL_PRODUCTS:
        return {
          ...state,
          products:action.payload,
          error: null,
        }

        case ADD_TO_CART:
          /* payload es el id, array de products, y el array de carrito */
          return {
            ...state,
            cart: addItem(action.payload, state.products, state.cart),
            cartStorage: addItem(action.payload, state.products, state.cart),
          };
          case DELETE_PRODUCT_CART:
      return {
        ...state,
        cart: deleteAllItem(state.cart, action.payload),
      };

      case DELETE_ONE_PRODUCT_CART:
        return {
          ...state,
          cart: deleteItem(action.payload, state.cart)
        }

       default:
        return state;
    }
}

export default reducer;