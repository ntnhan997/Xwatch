const { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } = require("../constants/userContants");




const SignInReducer = (state = {} ,action) => {
    switch(action.type){
        case SIGN_IN_REQUEST:
            return ({loading: true, userInfo: {}});
        case SIGN_IN_SUCCESS:
            return ({loading: false, userInfo: action.payload});
        case SIGN_IN_FAIL: 
            return ({loading: false, error: action.payload});
        default:
            return state;
    }
}

const RegisterReducer = (state = {}, action) => {
    switch(action.type){
        case REGISTER_REQUEST:
            return ({loading: true, userInfo: {}});
        case REGISTER_SUCCESS:
            return ({loading: false, userInfo: action.payload});
        case REGISTER_FAIL: 
            return ({loading: false, error: action.payload});
        default:
            return state;
    }
}

export {SignInReducer, RegisterReducer}