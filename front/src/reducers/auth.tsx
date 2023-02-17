import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../actions/types";

interface User {
    username: string;
    email: string;
    token: string;
}

interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
}

const user = JSON.parse(localStorage.getItem("user") || '{}');

const initialState: AuthState = user && user.body
    ? { isLoggedIn: true, user: user.body }
    : { isLoggedIn: false, user: null };

const authReducer = (state = initialState, action: any): AuthState => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}

export default authReducer;