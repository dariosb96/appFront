import axios from "axios";

export const FETCH_SELLS =  "FETCH_SELLS";

export const fetchSells = () => {
    return async dispatch => {
        dispatch ({type: FETCH_SELLS});

        try {
            const response = await axios.get('https://app-back-production-79c5.up.railway.app/sells');
            dispatch({type: FETCH_SELLS, payload: response.data});
        }catch ( error){
            return ({error: error.message});
        }

    }
}