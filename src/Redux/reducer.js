import { FETCH_PRODUCTS } from "./actions/Products/get_Products";

const initialState = {
    Products: [],
    Sells: [],
    detail: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_PRODUCTS:
            return {
                ...state,
                Products: action.payload,
            };
            default:
                return {...state};
    }
}

export default rootReducer;