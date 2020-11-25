import React, { useEffect } from 'react';
import Product from './Product';

import { useSelector, useDispatch } from 'react-redux';
import { listproduct } from '../actions/productAction';
import { useState } from 'react';


export default function ListProducts(){
    const product = useSelector(state => state.product || {});
    const dispatch = useDispatch();
    const {products} = product;

    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 6;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentTodos =[...products.slice(indexOfFirstNews, indexOfLastNews)];
    const page =[];
    for(let index = 0; index < Math.ceil(products.length / newsPerPage); index++){
        page.push(index);
    }


    useEffect(() => {
        dispatch(listproduct());
        return () =>{
        }
    },[dispatch]);

    return(  
            <div className="listproducts">
            <div className="listproducts">
                {
                    currentTodos.map((item,index) => {
                        return <Product key={index} item={item}/>
                    })
                    
                }
                </div>
                <div className= "pagination">
                    {
                        page.map((x,index) => {
                            return <button className="numPage" disabled={x === currentPage - 1} key={index} onClick={(e) => setCurrentPage(e.target.textContent)}>{x + 1}</button>
                        })
                    }
                </div>
            
            </div>
    )
}