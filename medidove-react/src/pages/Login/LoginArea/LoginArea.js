import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";

const LoginArea = () => {
   // const { loginUser, passwordResetWithEmail, googleSignIn } = useAuth();
   const [email,setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit =  () => {
      alert("user logged in")
      setEmail("")
      setPassword("")
    };
  
   return (
      <>
         <section className="login-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                     <div className="basic-login">
                        <h3 className="text-center mb-60">Login From Here</h3>
                        <form>
                           <label htmlFor="name" className='mb-2'>Email Address <span>**</span></label>
                           <input value={email} onChange={(e)=> setEmail(e.target.value)} required id="name" type="text"
                           placeholder="Enter Username or Email address..." />

                           <label htmlFor="pass" className='mb-2'>Password <span>**</span></label>
                           <input value={password} onChange={(e)=> setPassword(e.target.value)} required id="pass" type="password" placeholder="Enter password..." />

                           <div className="login-action mb-20 fix">
                              <span className="log-rem f-left">
                                 <input id="remember" type="checkbox" />
                                 <label htmlFor="remember">Remember me!</label>
                              </span>
                              <span className="forgot-login f-right">
                              </span>

                           </div>
                           <button onClick={handleSubmit} type="submit" className="primary_btn btn-icon-green w-100">Login Now</button>
                           <div className="or-divide"><span>or</span></div>
                           <Link to="/register"><button className="primary_btn theme-btn w-100">Register Now</button></Link>
                        </form>
                        
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default LoginArea;