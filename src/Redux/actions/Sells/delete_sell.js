import axios from "axios";

export const DELETE_SELL = "DELETE_SELL";

export const deleteSell = (id_sell) => {

    return async dispatch =>{
        dispatch({type: DELETE_SELL } );

        try{
            const response = await axios.delete(`http://localhost:3000/products/${id_sell}`)
            dispatch ({type: DELETE_SELL, payload: id_sell}); 
        }catch ( error) {
            return ( {error: error.message});
        }
}
 }