import { Reducer } from "react";
import { ProductsActions } from "../actions/common";
import { listsReducer } from "./listsReducer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const combineReducers = (slices: {[key: string]: Reducer<any, ProductsActions>}) => (prevState: any, action: ProductsActions) =>
    Object.keys(slices).reduce(
        (nextState, nextProp) => ({
            ...nextState,
            [nextProp]: slices[nextProp](prevState[nextProp], action)
        }),
        prevState
    );

export default combineReducers({
    application: listsReducer,
});
