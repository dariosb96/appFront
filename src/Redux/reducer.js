import { FETCH_PRODUCTS } from "./actions/Products/get_Products";

const initialState = {
    AllProducts: [],
    Product: [],
    Sells: [],
    detail: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_PRODUCTS:
            return {
                ...state,
                Product: action.payload,
                AllProducts: action.payload,
            };
            default:
                return {...state};
    }
}

export default rootReducer;