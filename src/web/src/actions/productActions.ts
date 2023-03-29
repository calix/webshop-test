import { QueryOptions } from "@testing-library/react";
import { Dispatch } from "react";
import {ProductItem} from "../models";
import { ListService } from "../services/listService";
import { ActionTypes } from "./common";
import config from "../config"
import { ActionMethod, createPayloadAction, PayloadAction } from "./actionCreators";

const listService = new ListService(config.api.baseUrl, '/products');

export interface ProductActions {
    list(options?: QueryOptions): Promise<ProductItem[]>
}

export const list = (options?: QueryOptions): ActionMethod<ProductItem[]> => async (dispatch: Dispatch<LoadProductActions>) => {
    const products = await listService.getList(options);

    dispatch(setProducts(products));

    return products;
}

export interface LoadProductActions extends PayloadAction<string, ProductItem[]> {
    type: ActionTypes.LOAD_PRODUCTS
}

export interface SetProducts extends PayloadAction<string, ProductItem[]> {
    type: ActionTypes.SET_PRODUCTS
}


const setProducts = createPayloadAction<LoadProductActions>(ActionTypes.LOAD_PRODUCTS);
