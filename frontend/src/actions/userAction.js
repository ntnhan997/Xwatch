import Axios from "axios";
import { SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from "../constants/userContants"
import axios from "axios";



export default SignIn =  (name,password) = async (dispatch) => {
    dispatch({type : SIGN_IN_REQUEST, payload: name,password });
    try {
        const data = await axios.post("/api/users/", {name, password});
        dispatch({type: SIGN_IN_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: SIGN_IN_FAIL, payload: error.message});
    }
}