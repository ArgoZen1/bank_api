import { configureStore, AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: true,
});

export type AppDispatch = ThunkDispatch<any, undefined, AnyAction>;

export default store;