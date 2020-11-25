import React from 'react';
import Rating from '@material-ui/lab/Rating';
import {Link } from 'react-router-dom'


export default function Product({item},props){
    return(
        <div className="product">
            <Link to={'/product/' + item.id}>
                <img src={item.image} alt="" className="product-image"/>
            </Link>
            <span className="product-series">{item.series}</span>
            <Link to={'/product/' + item.id}>
                <p className="product-name">{item.name}</p>
            </Link>
            <p className="product-price">{item.price} đ</p>
            <Rating className="product-numReviews" size="large" name="half-rating-read" defaultValue={item.numReviews} precision={0.5} readOnly />
        </div>
    )
}