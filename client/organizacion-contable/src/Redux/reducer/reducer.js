import  {addItem}  from "./utils";

const { ADD_TO_CART,GET_PRODUCT,GET_PRODUCT_BY_ID } = require("../actions/actions");



const inititalState = {
    products: [],
    allProducts: [],
    cart:[],
    cartStorage:[],
}


const rootReducer = (state = inititalState , action = {}) =>{
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                products: action.payload,
                allProducts: action.payload
            };
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                productDetail: action.paload
            }

        case ADD_TO_CART:
            return {
                ...state,
                cart: addItem(action.payload, state.products,state.cart),
                cartStorage: addItem(action.payload,state.products,state.cart),
            }
    }
}

export default rootReducer;