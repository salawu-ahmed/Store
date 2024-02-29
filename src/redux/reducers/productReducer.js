import { ActionTypes } from "../constants/action.types";

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products: action.payload}
    
        default:
            return state
    }
}

const initialProduct = {
    product : {}
}

export const selectedProductReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...action.payload}
    
        default:
             return state;
    }
 }