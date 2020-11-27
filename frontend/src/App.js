import React from 'react';
import './App.css';
import logo from './logo-xwatch.png';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import bct from './bo-cong-thuong.png';
import dmca from './dmca_protected.png';

import Item from './Item';

// icon
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


// import Carousel from 'react-material-ui-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

import ListProducts from './components/ListProducts';
import InfoProduct from './components/InfoProduct';
import CartProduct from './components/CartProduct';
import { useSelector } from 'react-redux';
import TypeProduct from './components/TypeProduct';
import AppleSeriesProduct from './components/AppleSeriesProduct';
import SignIn from './components/SignIn';
import Register from './components/Register';

var f=false;
var t = true;

function App() {

  const cart = useSelector(state => state.cart);
  const {cartItem} = cart;

  const signIn = useSelector(state => state.signIn);
  const {userInfo} = signIn;

  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        image: '/image/slide_1.jpg'
    },
    {
        name: "Random Name #2",
        description: "Hello World!",
        image: '/image/slide_2.jpg'
    },
    {
        name: "Random Name #3",
        description: "Hello World3!",
        image: '/image/slide_3.jpg'
    }
]

  return (
    <BrowserRouter>
        <div className="app">
          <header className="header">
            <Link to='/'>
              <img src={logo} alt="logo" className="logo"/>   
            </Link>
            <div className="menu">
              <span className="icon-link link-header">Open Box <KeyboardArrowDownIcon fontSize="inherit"/>
                <ul className="sub-menu">
                <Link to="/type/apple-watch"><li>Apple Watch Open Box</li></Link>
                <Link to="/type/macbook"><li>Macbook Open Box</li></Link>
                <Link to="/apple-watch"><li>AirPods Watch Open Box</li></Link>
                <Link to="/apple-watch"><li>iPad Watch Open Box</li></Link>
                </ul>
              </span>
              <span className="icon-link link-header">Watch <KeyboardArrowDownIcon fontSize="inherit"/>
                <ul className="sub-menu">
                    <Link to="/apple-watch/series-5"><li>Apple Watch Series 5</li></Link>
                    <Link to="/apple-watch/series-4"><li>Apple Watch Series 4</li></Link>
                    <Link to="/apple-watch/series-3"><li>Apple Watch Series 3</li></Link>
                    <Link to="/apple-watch/series-2"><li>Apple Watch Series 2</li></Link>
                    <Link to="/apple-watch/series-1"><li>Apple Watch Series 1</li></Link>
                </ul>
              </span>
              <span className="icon-link"><Link to="/mac">Mac</Link></span>
              <Link to="/ipad">iPad</Link>
              <Link to="/airpods">AirPods</Link>
              <span to="/accessories" className="icon-link link-header">Accessories <KeyboardArrowDownIcon fontSize="inherit"/>
              <div className="sub-menu sub-menu-width">
                <div className="sub-menu-2">
                <ul>
                      <li><strong>PHỤ KIỆN APPLE WATCH</strong></li>
                      <Link to='/sdsd/'><li>Sạc Apple Watch</li></Link>
                      <Link to='/sdsd/'><li>Dây Đeo Apple Watch</li></Link>
                      <Link to='/sdsd/'><li>Giá Đỡ Apple Watch</li></Link>
                      <Link to='/sdsd/'><li>Miếng Dán Apple Watch</li></Link> 
                      <Link to='/sdsd/'><li>Ốp Bảo Vệ Apple Watch</li></Link> 
                  </ul>
                  <ul>
                  <li><strong>PHỤ KIỆN CHÍNH HÃNG</strong></li>
                     <Link to='/sdsd/'><li>Phụ Kiện Macbook</li></Link>
                     <Link to='/sdsd/'><li>Phụ Kiện iPad</li></Link>
                     <Link to='/sdsd/'><li>Case For iPad</li></Link>
                  </ul>
                  </div>
              </div>
              </span>
            </div>   
            <div className="header-right">
              
               {userInfo ? <Link to="/profile">{userInfo.username}</Link> :
               <span className="taikhoan"><div className="icon-link"><AccountCircleIcon fontSize="large" className="header-icon"/> Tài Khoản</div>
                <div className="box-sign">
                  <Link to="/signin/">Đăng Nhập</Link>
                  <Link to='/register/'>Đăng Kí</Link>
                </div> 
                </span>
               }
                
              
              
              |
            <Link to="/cart/" className="icon-link"><span className="header-icon"><ShoppingCartIcon fontSize="large" /><span className="count-cart">{cartItem.length}</span></span> Giỏ Hàng</Link>
            </div>
           
          </header>
          <Route path="/" exact>            
                <Carousel 
                  autoPlay 
                  interval="1500"
                  showStatus={f}
                  infiniteLoop={t}
                  showArrows={f}
                  emulateTouch={t}
                  showThumbs={f}
                  >
                    {
                      items.map((item,i)=> <Item key={i} item={item}/>)
                    }
                </Carousel>
                </Route>

        </div>
        
            <div className="container">
            <Switch>
              
              <Route exact path="/"  component={ListProducts} />
              {/* <Carousel autoPlay='true' animation="slide" interval="3000" navButtonsAlwaysVisible="true" indicators={f}  className="carousel">
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
                </Carousel> */}
        
              <Route path='/product/:id' component={InfoProduct} className="infoProduct" exact/>
              <Route path = "/cart/:id?" component={CartProduct} exact />
              <Route path="/type/:type" component={TypeProduct} exact />
              <Route path="/apple-watch/:series" component={AppleSeriesProduct} exact />
              <Route path="/signin/" component={SignIn} />
              <Route path="/register" component={Register} />
              <Route component={()=> (<div>Error 404 Not Found</div>)} />
              </Switch>
            </div>
            <footer>    
              <div className="footer-top">
                <ul className="box-footer">
                  <li><img src={logo} alt="logo-footer" className="logo"/></li>
                  <li><Link to="/nothing">Về chúng tôi</Link></li>
                  <li><Link to="/nothing">Liên hệ & hỗ trợ</Link></li>
                  <li>Hotline: 036.427.9017</li>
                  <li>Email: ntnhan997@gmail.com</li>
                  <li>Add: 136 Hậu Giang P.6 Q.6 TPHCM</li>
                </ul>
                <ul className="box-footer">
                  <li><p>Tin tức & tư vấn</p></li>
                  <li><Link to="/nothing">Tin tức & khuyến mãi</Link></li>
                  <li><Link to="/nothing">Hướng dẫn sử dụng</Link></li>
                  <li><Link to="/nothing">Tư vấn mua Apple Watch</Link></li>
                  <li><Link to="/nothing">Video hướng dẫn</Link></li>
                  <li><Link to="/nothing">Bộ sưu tập hình ảnh</Link></li>
                  <li><Link to="/nothing">Blog Nhân XWatch</Link></li>
                  <li><Link to="/nothing">Kiến thức công nghệ</Link></li>
                </ul>
                <ul className="box-footer">
                  <li><p>Chính sách & hỗ trợ</p></li>
                  <li><Link to="/nothing">Chính sách bảo hành</Link></li>
                  <li><Link to="/nothing">Chính sách vận chuyển</Link></li>
                  <li><Link to="/nothing">Chính sách đổi trả/hoàn tiền</Link></li>
                  <li><Link to="/nothing">Chính sách bảo mật</Link></li>
                  <li><Link to="/nothing">Hướng dẫn mua hàng</Link></li>
                  <li><Link to="/nothing">Hướng dẫn thanh toán</Link></li>
                  <li><Link to="/nothing">Đồng hồ Thụy Sỹ chính hãng</Link></li>
                </ul>
                <ul className="box-footer">
                  <li><p>Follow US</p></li>
                  <li>
                    <a href="https://www.facebook.com/trungnhan.97/"><FacebookIcon fontSize="large"/></a>
                    <a href="https://www.facebook.com/trungnhan.97/"><InstagramIcon fontSize="large"/></a>
                    <a href="https://www.facebook.com/trungnhan.97/"><FacebookIcon fontSize="large"/></a>
                    <a href="https://www.facebook.com/trungnhan.97/"><FacebookIcon fontSize="large"/></a>
                    <a href="https://www.facebook.com/trungnhan.97/"><FacebookIcon fontSize="large"/></a>
                    <a href="https://www.facebook.com/trungnhan.97/"><FacebookIcon fontSize="large"/></a>
                  </li>
                  <li><img src={bct} alt="bct"/></li>
                  <li><img src={dmca} alt="dmca"/></li>
                </ul>
              </div>  
              <div className="footer-bottom">
                  Copyright 2020 © XWatch - Trung Nhân Apple Watch
              </div>        
            </footer>
    </BrowserRouter>
  );
}

export default App;
