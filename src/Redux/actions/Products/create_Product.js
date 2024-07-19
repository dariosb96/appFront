import axios from "axios";

export const CREATE_PRODUCT = "CREATE_PRODUCT";

export const createProduct = (productId) => {

    return async dispatch =>{
       

        try{
            const response = axios.post('http://localhost:3000/products', productId); 
            dispatch({type: CREATE_PRODUCT, payload: productId});
        } catch ( error){
            console.error('Error creating product', error);
            return ({error: error.message});
        }
    }
}

