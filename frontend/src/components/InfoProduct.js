import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {detailsProduct} from '../actions/productAction';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';

function InfoProduct(props) {
    
    const dispatch = useDispatch();
    const detailsProducts = useSelector(state => state.detailsProducts || {})
    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id));
        return (()=>{

        });
    },[props.match.params.id,dispatch]);
    const {products} = detailsProducts;
    const [qty, setQty] = useState(1);

    // useEffect(() =>{
    //     if(qty <= 0){
    //         setQty(1);
    //     }
    //     return (() =>{

    //     });
    // }, [qty]);

    const handleAddToCart = () =>{
        props.history.push("/cart/"+ products._id+ "?qty=" + qty);
    }
    return (
        <div className="infoProduct">
            <h2 className="details-name">{products.info === undefined ? <Skeleton animation="wave" width={660} height={30}/>:products.name}</h2>
            {products.info === undefined ? <Skeleton animation="wave" width={90} height={18}/>:<Rating className="details-rating" size="large" name="half-rating-read" defaultValue={4} precision={0.5} readOnly />}
            
            <div className="details">
            {products.info === undefined ? <Skeleton animation="wave" width={500} height={500}/>:<img src={products.image} alt="" className="details-image"/>}
                <div className="details-left">
                    <p className="details-price">{products.info === undefined ? <Skeleton animation="wave" width={130} height={30}/>:products.price + "đ"}</p>
                    {products.info === undefined ? <Skeleton animation="wave" width={278} height={236}/>:
                    <table className="table-details">
                        <tbody>
                            <tr>
                                <td>Tình Trạng:</td>
                                <td>{products.info.status}</td>
                            </tr>
                            <tr >
                                <td>Kích cỡ màn hình:</td>
                                <td>{products.info.size}</td>
                            </tr>
                            <tr >
                                <td>Bộ nhớ:</td>
                                <td>{products.info.memory}</td>
                            </tr>
                            <tr >
                                <td>Màu case:</td>
                                <td>{products.info.color}</td>
                            </tr>
                            <tr >
                                <td>Chất liệu:</td>
                                <td>{products.info.material}</td>
                            </tr>
                            <tr >
                                <td>Kết nối:</td>
                                <td>{products.info.internet}</td>
                            </tr>
                        </tbody>
                    </table>
                    }
                    {products.info === undefined ? <Skeleton animation="wave" width={200} height={40}/>:
                    <div className="product-cart">
                        <button onClick={() => setQty(qty-1)}>-</button><input className="qty-details" type="number" value={qty} onChange={(e) => setQty(e.target.value)}/><button onClick={() => setQty(qty + 1)}>+</button>
                        {
                        
                            qty > 0 && <Button variant="contained" color="primary"  onClick={handleAddToCart}>Mua hàng</Button>
                        
                        }
                    </div> 
                    }
                </div>
            </div>
            
        </div>
    )
}

export default InfoProduct;