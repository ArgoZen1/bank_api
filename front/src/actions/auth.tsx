import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "./types";

import AuthService from "../services/auth.service";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction, Dispatch } from 'redux';

type AppDispatch = ThunkDispatch<any, any, AnyAction>;

export const login = (username: string, password: string) => (dispatch: AppDispatch) => {
    return AuthService.login(username, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch: Dispatch<AnyAction>) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });

    return Promise.resolve();
};