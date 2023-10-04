import React from 'react';
import { Link } from 'react-router-dom';

const HomeSingleFooterBlog = ({image}) => {
    return (
        <>
            <div className="signle-blog-feeds mb-20">
                <div className="blog-feeds-thumb">
                    <Link to="/blogDetails"><img src={`img/blog/feeds-thumb-${image}.jpg`} alt=""/></Link>
                </div>
                <div className="blog-feeds-text">
                    <h5><Link to="/blogDetails">Teen Pregnancy: an increasing Phenomenon.</Link></h5>
                    <span className="feeds-date">14 Feb 2023</span>
                </div>
            </div>
        </>
    );
};

export default HomeSingleFooterBlog;