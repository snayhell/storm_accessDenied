import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import LoginArea from './LoginArea/LoginArea';

const Login = () => {
    return (
        <>
           <HomeHeader/>
           <LoginArea/>
           <Footer/>
        </>
    );
};

export default Login;