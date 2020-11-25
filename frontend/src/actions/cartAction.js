import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartContants';
// import data from '../data';

import axios from "axios";
import Cookie from 'js-cookie';


const addToCart = (productId, qty) => async (dispatch, getState) =>{
    try {

        const dataId = await axios.get("/api/products/" + productId);
        

        dispatch({type: CART_ADD_ITEM, payload: [{
            ...dataId.data,
            qty: qty
        }]});
        const {cart: {cartItem}} = getState();
        Cookie.set("cartItem", JSON.stringify(cartItem));
    } catch (error) {
        
    }
}


const removeFromCart = (productId) => (dispatch,getState) => {
    try {
        dispatch({type: CART_REMOVE_ITEM, payload: productId});
        const {cart: {cartItem}} = getState();
        Cookie.set("cartItem", JSON.stringify(cartItem));
    } catch (error) {
        
    }
   
}

export {addToCart, removeFromCart}