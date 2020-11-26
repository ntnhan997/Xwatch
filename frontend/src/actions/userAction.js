import Axios from "axios";
import { SIGN_IN_REQUEST } from "../constants/userContants"
import axios from "axios";



export default SignIn =  (name,password) = async (dispatch) => {
    dispatch({type : SIGN_IN_REQUEST, payload: name,password });
    try {
        const UserInfo = axios.get("/api/users/");
    } catch (error) {
        
    }
}