import axios from "../utils/axios.base";
import {START,AUTH_SUCCESS,FAILED,LOGOUT_SUCCESS}  from "./type";


export const start = () => ({
    type: START, 
  });
  
  export const authSuccess = (token, user, msg) => ({
    type: AUTH_SUCCESS,
    payload: {
      token,
      user, 
      msg
    }
  });

  export const authFailed = msg => ({
    type: FAILED,
    payload: msg.msg
  });

  export const login = (data) => {
    return (dispatch) => {
        dispatch(start())
        axios.post("/user/login",data)
        .then(res => {
            const { token, user, msg} = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(authSuccess(token, user, msg))
        })
        .catch(err => dispatch(authFailed(err.response)))
    }
  }

  export const register = (data) => {
    return (dispatch) => {
        dispatch(start())
        axios.post("/user/signup",data)
        .then(res => {
            const { token, user, msg } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(authSuccess(token, user, msg))
        })
        .catch(err => dispatch(authFailed(err.response)))
    }
  }

  export const logout = () => {
    return {
      type: LOGOUT_SUCCESS
    }
  };