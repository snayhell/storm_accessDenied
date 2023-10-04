import React from 'react';
import { Link } from 'react-router-dom';

const BlogFourthArticle = () => {
    return (
        <>
          <article className="postbox post format-image mb-40">
                <div className="postbox__thumb">
                    <Link to="/blogDetails">
                        <img src="https://www.shutterstock.com/shutterstock/videos/1034003993/thumb/1.jpg?ip=x480" alt="blog img" />
                    </Link>
                </div>
                <div className="postbox__text p-50">
                   
                    
                    <div className="post-text mb-20" style={{}}>
                        <p >Is this pregnant women eating the right food,if no why?</p>
                    </div>
                    <div className="read-more mt-30" style={{borderRadius:"20px"}}>
                        <div  className="primary_btn theme-btn mb-20"  style={{borderRadius:"20px",width:"100%"}}>read more</div>
                        <div  className="primary_btn theme-btn mb-20"  style={{borderRadius:"20px",width:"100%"}}>read more</div>
                        <div  className="primary_btn theme-btn mb-20"  style={{borderRadius:"20px",width:"100%"}}>read more</div>
                        <div  className="primary_btn theme-btn mb-20"  style={{borderRadius:"20px",width:"100%"}}>read more</div>
                        
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogFourthArticle;