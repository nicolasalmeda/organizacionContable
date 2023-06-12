import { GET_ALL_PRODUCTS,
  ADD_TO_CART,
  DELETE_PRODUCT_CART, 
  DELETE_ONE_PRODUCT_CART,
  SAVE_ORDER,
  EDIT_PRODUCT,CLEAR_CART, 
  GET_ORDERS, 
  GET_PRODUCT_BY_ID, 
  CLEAR_STATE 
} from "../actions/actions";
import {addItem, deleteAllItem,deleteItem} from './utils'

const initialState = {
  products: [],
  error:null,
  cart:[],
  orders:[]
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

        case GET_ORDERS:
          return {
            ...state,
            orders:action.payload,
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
      
        case SAVE_ORDER: 
        return{
          ...state
        }
        
        case EDIT_PRODUCT:
          return{
            ...state
          }

        case CLEAR_CART:
          return {
            ...state,
            cart: []
          }
          case GET_PRODUCT_BY_ID:
          return {
          ...state,
          productDetail: action.payload,
        }

        case CLEAR_STATE:
      return {
        ...state,
        productDetail: [],
      };

      

     default:
        return state;
    }
}

export default reducer;