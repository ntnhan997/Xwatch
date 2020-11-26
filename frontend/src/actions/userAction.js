import { SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from "../constants/userContants";
import axios from "axios";


const signin = (username,password) => async (dispatch) => {
    dispatch({type : SIGN_IN_REQUEST, padload: {username,password}});
    try {
        const data = await axios.post("/api/users/signin", {username, password});
        dispatch({type: SIGN_IN_SUCCESS, payload: data.data});
    } catch (error) {
        dispatch({type: SIGN_IN_FAIL, payload: error.message});
    }
}

export {signin}