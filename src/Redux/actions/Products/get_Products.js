import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = () => {
    return async dispatch => {
        dispatch ({  type: FETCH_PRODUCTS });

        try {
                const response = await axios.get('http://localhost:3000/products');
                dispatch ({ type: FETCH_PRODUCTS, payload: response.data});
        }catch (error){
            return ({error: error.message});
        }
    }
}