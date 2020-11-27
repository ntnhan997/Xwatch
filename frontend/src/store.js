import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import {productDetailsReducers, productListReducers} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { RegisterReducer, SignInReducer } from './reducers/userReducer';

const cartItem = Cookie.getJSON("cartItem") || [];

const initialState = {cart: {cartItem}};
let dem = 0;
dem++;
console.log(dem);
const reducer = combineReducers({
    product: productListReducers,
    detailsProducts: productDetailsReducers,
    cart: cartReducer,
    signIn: SignInReducer,
    registerUser: RegisterReducer 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;