import axios from "axios";

export const CREATE_SELL = "CREATE_SELL";

export const createSell = (id_sell) => {
    return async dispatch => {
        dispatch ({type: CREATE_SELL});

        try {
            const response = await axios.post("http://localhost:3000/products", sell);

            dispatch({type: CREATE_SELL, payload: id_sell});
        }catch (error){
            return ({error: error.message});
        }

    }
    
}