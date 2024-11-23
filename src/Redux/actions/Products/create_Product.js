// import axios from "axios";
import axios from "axios";

export const CREATE_PRODUCT = "CREATE_PRODUCT";

export const createProduct = (productData, token) => {

    return async dispatch =>{
        

        try{
            const response = await axios.post(
                "https://app-back-production-79c5.up.railway.app/products",
                productData, // Aquí envías los datos del producto
                {
                    headers: {
                        'Authorization': `${token}` //  NO Incluye 'Bearer'
                    }
                }
            );
            dispatch({type: CREATE_PRODUCT, payload: response.data});
        } catch ( error){
            console.error('Error creating product', error);
            return ({error: error.message});
        }
    }
}


