import { PRODUCT_REQUEST_LIST, PRODUCT_SUCCESS_LIST, PRODUCT_FAIL_LIST, PRODUCT_REQUEST_DETAILS, PRODUCT_SUCCESS_DETAILS, PRODUCT_FAIL_DETAILS } from "../constants/productContants";

// import datax from '../data';

import axios from 'axios';

const listproduct = () => async (dispatch) => {
    try {
        dispatch({type : PRODUCT_REQUEST_LIST});
        const datas = await axios.get("/api/products");
        const data = datas.data;
        dispatch({type: PRODUCT_SUCCESS_LIST, payload: data});
    } catch (error) {
        dispatch({type: PRODUCT_FAIL_LIST, payload: error});  
    }
}

const detailsProduct = (productId) => async (dispatch) => {
    try {
        
        dispatch({type: PRODUCT_REQUEST_DETAILS, payload: productId});
        const datas = await axios.get("/api/products/" + productId);
        const data = datas.data;

        dispatch({type: PRODUCT_SUCCESS_DETAILS, payload: Object.assign({},data)});
    } catch (error) {
        dispatch({type: PRODUCT_FAIL_DETAILS, payload: error});
    }
}

export {listproduct, detailsProduct};