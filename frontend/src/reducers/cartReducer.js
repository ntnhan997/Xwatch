import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartContants';


const cartReducer = (state =  {cartItem: []}, action) =>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            const product = state.cartItem.find(x => {return x.id === parseInt(item[0].id)});
            
            if(product){
                let temp = state.cartItem.map((x) => x.id === parseInt(product.id) ? item[0]: x);
                return { cartItem: [...temp]  
                };
            }
            return {cartItem: [
                ...state.cartItem,
                ...item
            ]}
        case CART_REMOVE_ITEM:
            const products = state.cartItem.filter((x) => {
                return x.id !== action.payload;
            });
            return {
                cartItem: [...products]
            }
        default: 
            return state;
    }
}

export {cartReducer}