import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartAction';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

import {Link} from 'react-router-dom';

export default function (props){

    const cart = useSelector(state => state.cart);
    const {cartItem} = cart;
    const productId = props.match.params.id;
    const qty = props.location.search?Number(props.location.search.split("=")[1]):1;
    const dispatch= useDispatch();
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty));
        }
        return (()=>{

        });
    },[productId,qty,dispatch]);

    const removeCart = (id) =>{
        dispatch(removeFromCart(id));
    }


    return (
        (cartItem.length !== 0) ?
            <div className="table-cart">
            
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell> <span className="label-cart">SẢN PHẨM</span> </TableCell>
                        <TableCell align="right"> <span className="label-cart">GIÁ</span></TableCell>
                        <TableCell align="right"><span className="label-cart">SỐ LƯỢNG</span></TableCell>
                        <TableCell align="right"><span className="label-cart">TẠM TÍNH</span></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cartItem.map((item,index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row" >
                                <div className="cart-image">
                                    <span className="icon-delete" onClick={() => removeCart(item._id)}>
                                        <DeleteForeverOutlinedIcon fontSize="large"/>
                                    </span>
                                    <Link to={"/product/" + item._id}><img src={item.image} alt="cart-not-found"/></Link>
                                    <Link to={"/product/" + item._id}><p>{item.name}</p></Link>
                                </div>
                            </TableCell>
                            <TableCell align="right" ><span className="cart-price">{item.price}đ</span></TableCell>
                            <TableCell align="right"><span className="cart-qty">{item.qty}</span></TableCell>
                            <TableCell align="right">
                                {item.price === undefined ? "" : 
                                    <span className="cart-price">
                                    {
                                        (Number(item.price.replaceAll(".","")) * item.qty).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,') // 12,345.67
                                    }đ
                                    </span>
                                
                                }
                                
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
        :
        <div>Không có sản phẩm trong giỏ hàng</div> 
    )
}