import axios from "axios";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";

export const filterProducts = (category, token) => {
    return async dispatch => {

        try {
            const response = await axios.get(`https://app-back-production-79c5.up.railway.app/products/category/${category}`, {
                headers: {
                    'Authorization': `${token}` // Añade 'Bearer' antes del token
                }
            });
            dispatch({type: FILTER_PRODUCTS, payload: response.data});
        }catch (error){
            return ({error: error.message});
        }
    }
}