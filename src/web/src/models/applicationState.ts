import { Dispatch } from "react";
import { ProductsActions } from "../actions/common";
import { ProductItem } from "./productItem";
import { Products } from "./products";

export interface AppContext {
    state: ApplicationState
    dispatch: Dispatch<ProductsActions>
}

export interface ApplicationState {
    application?: Products
}

export const getDefaultState = (): ApplicationState => {
    return {
        application: {},
    }
}

