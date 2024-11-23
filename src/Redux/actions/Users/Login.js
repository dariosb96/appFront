import axios from 'axios';


export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const LoginUser = (credentials) => async (dispatch) => {
    try{
        dispatch({type: LOGIN_REQUEST});
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const {data} = await axios.post('https://app-back-production-79c5.up.railway.app/users/login', credentials, config);
        
        localStorage.setItem('token', data.token);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.token,
        });
    }catch ( error){
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response?.data.message || error.message,
        });
    }
}



export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({type: LOGOUT});

}