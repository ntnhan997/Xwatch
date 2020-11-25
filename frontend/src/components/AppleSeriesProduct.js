import React from 'react';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { listproduct } from "../actions/productAction";
import Product from "./Product";



export default function AppleSeriesProduct (props){
    const product = useSelector(state=> state.product);
    const {products} = product;
    const dispatch = useDispatch();
    const series = props.match.params.series.replace("-"," ");
    useEffect(() => {
        dispatch(listproduct());
        return (() => {
            
        })
    },[dispatch]);
    return (
        <div class="listproducts">
            {
                products.filter(x => {
                    return x.series.toLowerCase() === series
                }).map(item=>{
                    return <Product key={item.id} item={item} />
                })
            }

        </div>
    )
}