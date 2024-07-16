import { FETCH_PRODUCTS } from "./actions/Products/get_Products";
import { CREATE_PRODUCT } from "./actions/Products/create_Product"; 
import { DELETE_PRODUCT } from "./actions/Products/delete_product";
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
            default:
                return state;
    }
}

export default rootReducer;