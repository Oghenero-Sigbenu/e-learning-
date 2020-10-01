import { 
    LOGOUT_SUCCESS, 
    START,FAILED, AUTH_SUCCESS, 
   } from "../actions/type";

const token = localStorage.getItem("token");

const initialState = {
    token,
    isLoggedIn:false,
    user: JSON.parse(localStorage.getItem('user')),
    isLoading: false
}

const reducer = (state = initialState, action) => {
    const {payload,type} = action;
    switch (type) {
        case START:
            return {
                ...state,
                isLoading: true
            };
            case AUTH_SUCCESS:
            return {
            ...state,
            token: payload.token,
            user: payload.user,
            isLoading: true,
            isLoggedIn: false,
            error: null,
            msg: payload.msg
        };
        case FAILED:
            return {
                ...state,
                msg: payload,
                isLoading: false
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                userId: null,
                user: null,
                isLoading: false,
                error: action.error,  
                isLoggedIn: false
            }
        default:
            return state;
    }
}

export default reducer;