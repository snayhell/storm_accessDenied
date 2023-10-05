import React from 'react';
import { Link } from 'react-router-dom';

const SingleSecondShop = ({image}) => {
   return (
      <>
         <div className="col-lg-4 col-md-6">
            <div className="product mb-30">
               <div className="product__img">
                  <Link to="/shopDetails"><img src={`img/shop/img${image}.jpg`} alt="" style={{width:"760", height:"700"}}/></Link>
               </div>
            </div>

         </div>
         <div className="col-lg-8">
            <div className="product-list-content pt-10 mb-30">
               <div className="product__content mb-20">
                  <span className="pro-cat"><Link to="/shopDetails">Cloths</Link></span>
                  <h4 className="pro-title"><Link to="/shopDetails">Medidove Product</Link></h4>
                  <div className="price">
                     <span>$95.00</span>
                     <span className="old-price">$120.00</span>
                  </div>
               </div>
               <p>You can buy customised merchandise for yourself and your child and get the desired outfit.</p>
               <div className="product-action-list">
                  <Link className="primary_btn btn-theme" to="/shoppingCart">add to cart</Link>
                  <a className="action-btn" href="#"><i className="fas fa-heart"></i></a>
                  <Link className="action-btn" to="/shopDetails"><i
                     className="fas fa-expand"></i></Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleSecondShop;