import { createContext } from "react";
import { AppContext, getDefaultState } from "../models/applicationState";

const initialState = getDefaultState();
const dispatch = () => { return };

export const WebShopContext = createContext<AppContext>({ state: initialState, dispatch: dispatch });