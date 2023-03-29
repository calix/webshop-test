import { Reducer } from "react";
import { ActionTypes, ProductsActions } from "../actions/common";
import { Products } from "../models"

export const listsReducer: Reducer<Products, ProductsActions> = (state: Products, action: ProductsActions): Products => {
    switch (action.type) {
        case ActionTypes.LOAD_PRODUCTS:
            console.log("Payload coming: ", action.payload);
            state = {...state,  products: [...action.payload]};
            break;
        case ActionTypes.SET_PRODUCTS:
            state = {...state, products: [...action.payload]};
            break;
    }
    return state;
}