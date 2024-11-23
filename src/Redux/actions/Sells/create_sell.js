import axios from "axios";

export const CREATE_SELL = "CREATE_SELL";

export const createSell = (sellData, token) => {
    return async dispatch => {
        dispatch ({type: CREATE_SELL});

        try {
            const response = await axios.post("https://app-back-production-79c5.up.railway.app/sells",
             sellData, {
                headers: {
                    'Authorization': `${token}`
                }
             });

            dispatch({type: CREATE_SELL, payload: response.data});
        }catch (error){
            return ({error: error.message});
        }

    }
    
}