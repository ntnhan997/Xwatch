const { PRODUCT_FAIL_LIST, PRODUCT_REQUEST_LIST, PRODUCT_SUCCESS_LIST, PRODUCT_REQUEST_DETAILS, PRODUCT_SUCCESS_DETAILS, PRODUCT_FAIL_DETAILS } = require("../constants/productContants");
const productListReducers = (state = { products: [] }, action )=>{
    switch(action.type){
        case PRODUCT_REQUEST_LIST:
            return {loading: true, products: []};
        case PRODUCT_SUCCESS_LIST: 
            return {loading: false, products: action.payload};
        case PRODUCT_FAIL_LIST:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}


const productDetailsReducers = (state = { products: {}}, action) =>{
    switch(action.type){
        case PRODUCT_REQUEST_DETAILS:
            return {loading: true, products: []};
        case PRODUCT_SUCCESS_DETAILS:
            return ({loading: false, products: {...action.payload,info:Object.assign({},action.payload.info)}});
        case PRODUCT_FAIL_DETAILS:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export {productListReducers, productDetailsReducers};