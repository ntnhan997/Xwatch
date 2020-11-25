import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartContants';
import data from '../data';
import Cookie from 'js-cookie';


const addToCart = (productId, qty) => (dispatch, getState) =>{
    try {

        const dataId = data.find(x => x.id === parseInt(productId));

        dispatch({type: CART_ADD_ITEM, payload: [{
            ...dataId,
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