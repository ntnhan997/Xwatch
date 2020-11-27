import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from "../constants/userContants";
import axios from "axios";


const signin = (username,password) => async (dispatch) => {
    dispatch({type : SIGN_IN_REQUEST, payload: {username,password}});
    try {
        const data = await axios.post("/api/users/signin", {username, password});
        dispatch({type: SIGN_IN_SUCCESS, payload: data.data});
    } catch (error) {
        dispatch({type: SIGN_IN_FAIL, payload: error.message});
    }
}

const register = (name,sex,username,password,mail) => async (dispatch) => {
    dispatch({type: REGISTER_REQUEST,payload: {name,sex,username,password,mail}});
    try {
        const data = await axios.post("/api/users/register", {name,sex,username,password,mail});
        dispatch({type: REGISTER_SUCCESS, payload: data.data});
    } catch (error) {
        dispatch({type: REGISTER_FAIL, payload: error.message});
    }
}

export {signin,register}