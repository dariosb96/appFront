import axios from "axios";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const deleteProduct = (id_product) => {
    return async dispatch => {
            dispatch ({type: DELETE_PRODUCT});
        try {
                const response = axios.delete(`https://app-back-production-79c5.up.railway.app/products/${id_product}`)
                dispatch({type: DELETE_PRODUCT, payload: id_product});
        }catch (error){
            return ({error:error.message})
        }

    }
}