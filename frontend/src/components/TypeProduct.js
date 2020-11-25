import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listproduct } from '../actions/productAction';
import Product from './Product';


export default function TypeProduct (props){
    const type = props.match.params.type.replace("-"," ");
    const product = useSelector(state => state.product || {});
    const dispatch = useDispatch();
    const {products} = product;

    useEffect(() => {
        dispatch(listproduct());
        return () =>{
        }
    },[dispatch]);
    
    return(<div className="listproducts">
        {
            products.filter(x => {
                return type === x.type.toLowerCase();
            }).map(item =>{
                return <Product key={item.id} item={item}/> 
            })
        }
    </div>);
}