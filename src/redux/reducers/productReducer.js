import { ActionTypes } from "../constants/action.types";

const initialState = {
    products: [{
        name: "Redux Tutorial",
        price: 8,
        category: "programming"
    }]
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return state
    
        default:
            return state
    }
}