import React from 'react';
import { Link } from 'react-router-dom';

const HomeSingleBlogLeftSide = ({image}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="latest-news-box mb-30">
               <div className="latest-news-thumb mb-35">
                  <img src={`img/blog/blog-thumb-${image}.jpg`} alt=""/>
               </div>
               <div className="latest-news-content">
                  <div className="news-meta mb-10">
                     <span><Link to="/blogDetails" className="news-tag">Medical,</Link></span>
                     <span><Link to="/blogDetails" className="news-tag">Medicine</Link></span>
                  </div>
                  <h3><Link to="/blogDetails">Mental Health for Mothers</Link></h3>
                  <p>There is a seminar happening to address the issue of Postpartum Depression.</p>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSingleBlogLeftSide;