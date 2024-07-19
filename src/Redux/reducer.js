import { FETCH_PRODUCTS } from "./actions/Products/get_Products";
import { CREATE_PRODUCT } from "./actions/Products/create_Product"; 
import { DELETE_PRODUCT } from "./actions/Products/delete_product";
import { FETCH_SELLS } from "./actions/Sells/get_sells";
import { CREATE_SELL } from "./actions/Sells/create_sell";
import { DELETE_SELL } from "./actions/Sells/delete_sell";
const initialState = {
    Products: [],
    Sells: [],
    detail: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_PRODUCTS:
            return {
                ...state,
                Products: action.payload,
            };
        case CREATE_PRODUCT:
            return {
                ...state,
                Products: [...state.Products, action.payload],
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                Products: state.Products.filter(product => product.id !== action.payload),
             };     
        case FETCH_SELLS:
            return {
                ...state,
                Sells: action.payload,
            };
        case CREATE_SELL:
            return {
                ...state,
                Sells: [...state.Sells, action.payload],
            };
        case DELETE_SELL:
            return {
                ...state,
                Sells: state.Sells.filter(sell => sell.id !== action.payload),
            };             
            default:
                return state;
    }
}

export default rootReducer;