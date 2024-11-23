import axios from "axios";
 
export const CREATE_USER = "CREATE_USER";

export const createUser =  (userData) => { 
    return async dispatch => {
        dispatch({type: CREATE_USER});
        try {
            const response = await axios.post("https://app-back-production-79c5.up.railway.app/users", userData);
            dispatch({type: CREATE_USER, payload: response.data});
        }catch(error){
            return ({error: error.message});
        }
    }
}