import * as productActions from './productActions';

export enum ActionTypes {
    LOAD_PRODUCTS = "LOAD_PRODUCTS",
    SET_PRODUCTS = "SET_PRODUCTS"
}

export type ProductsActions =
    productActions.LoadProductActions |
    productActions.SetProducts