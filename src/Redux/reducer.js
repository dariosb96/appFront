import { FETCH_PRODUCTS } from "./actions/Products/get_Products";
import { CREATE_PRODUCT } from "./actions/Products/create_Product"; 
import { DELETE_PRODUCT } from "./actions/Products/delete_product";
import { FETCH_SELLS } from "./actions/Sells/get_sells";
import { CREATE_SELL } from "./actions/Sells/create_sell";
import { DELETE_SELL } from "./actions/Sells/delete_sell";
import { FILTER_PRODUCTS } from "./actions/Products/filter_products";
import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "./actions/Users/Login";


const initialState = {
    Products: [],
    Sells: [],
    FilteredProd: [],
    user: null,
    loading: false,
    token: localStorage.getItem('token')? localStorage.getItem('token') : null,
    error: null,
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
        case FILTER_PRODUCTS:
            return {
                ...state,
                FilteredProd: action.payload,
            };
        case LOGIN_REQUEST:
            return{
                ...state, 
                loading: true, error: null};
        case LOGIN_SUCCESS:
            
            return {
                ...state,
                loading: false, token: action.payload, error:null,
            };
        case LOGIN_FAIL:
            return{
                ...state, 
                loading:false, token: null, error: action.payload,
            }
        case LOGOUT:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null, error: null,
            }                

            default:
                return state;
    }
}

export default rootReducer;