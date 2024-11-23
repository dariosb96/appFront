import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchProducts = (token) => {
    return async dispatch => {
        
        try {
                const response = await axios.get("https://app-back-production-79c5.up.railway.app/products", {
                    headers: {
                        'authorization': `${token}`
                    }
                });
                dispatch ({ type: FETCH_PRODUCTS, payload: response.data});
        }catch (error){ 
            console.log({error:error.message});
            return ({error: error.message});
                   }
    }
}