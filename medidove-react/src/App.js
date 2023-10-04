import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import AllContext from './context/AllContext';
import AboutUs from './pages/AboutUs/AboutUs';
import Appointment from './pages/Appointment/Appointment';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import BlogLeftSideBar from './pages/BlogLeftSideBar/BlogLeftSideBar';
import BlogNoSideBar from './pages/BlogNoSideBar/BlogNoSideBar';
import Blogs from './pages/Blogs/Blogs';
import BlogThreeColMasonry from './pages/BlogThreeColMasonry/BlogThreeColMasonry';
import BlogThreeColumn from './pages/BlogThreeColumn/BlogThreeColumn';
import BlogTwoColumn from './pages/BlogTwoColumn/BlogTwoColumn';
import BlogTwoColumnMasonry from './pages/BlogTwoColumnMasonry/BlogTwoColumnMasonry';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Contact from './pages/Contact/Contact';
import DetailsAudio from './pages/DetailsAudio/DetailsAudio';
import DetailsGallery from './pages/DetailsGallery/DetailsGallery';
import DetailsLeftSideBar from './pages/DetailsLeftSideBar/DetailsLeftSideBar';
import DetailsVideo from './pages/DetailsVideo/DetailsVideo';
import DoctorDetails from './pages/Doctors/DoctorDetails/DoctorDetails';
import DoctorsOne from './pages/Doctors/DoctorsOne/DoctorsOne';
import { useContext,createContext, useEffect,useState } from 'react';

import Home from './pages/Home/Home/Home';

import Login from './pages/Login/Login';
import PortfolioSlider from './pages/PortfolioSlider/PortfolioSlider';
import PortfolioThreeCol from './pages/PortfolioThreeCol/PortfolioThreeCol';
import PortfolioTwoColumn from './pages/PortfolioTwoColumn/PortfolioTwoColumn';
import Register from './pages/Register/Register';
import ServicesDetails from './pages/Services/ServicesDetails/ServicesDetails';
import ServicesOne from './pages/Services/ServicesOne/ServicesOne';

import ShopDetails from './pages/ShopDetails/ShopDetails/ShopDetails';
import ShopPage from './pages/ShopPage/ShopPage/ShopPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import WishList from './pages/wishList/WishList';

import './App.css';
import NotFound from './pages/NotFound/NotFound';
import Map from './pages/Map';
import Profile from './pages/Profile';
import Vaccine from './pages/Vaccine';
// import Tutorials from './pages/Yoga/pages/Tutorials/Tutorials';
// import Yoga1 from './pages/Yoga/Yoga1';
// import Yoga from './pages/Yoga/pages/Yoga/Yoga';
import Physical from './pages/Education/Physical';
import Remedy from './pages/Remedy';

import { getFirestore, doc, getDoc } from "firebase/firestore";
export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const db = getFirestore();
    const userDocRef = doc(db, "health-record", "wXTMtAspmNNz8dfqiMle");
    
    try {
      const getUserData = async () => {
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          setUser(userDocSnapshot.data());
          console.log(userDocSnapshot.data());
        } else {
          console.error("User data not found in Firestore");
        }
      };
  
      getUserData();
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, []);
  
  return (
    <>
      <UserContext.Provider value={{user,setUser}}>
      <AllContext>
        <BrowserRouter>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<ServicesOne />} />
            <Route path='/education' element={<Physical/>} />

            {/* <Route path="/servicesTwo" element={<ServicesTwo />} /> */}
            <Route path="/servicesDetails" element={<ServicesDetails />} />
            <Route path="/doctors" element={<DoctorsOne />} />
            {/* <Route path="/doctorsTwo" element={<DoctorsTwo />} /> */}
            <Route path="/doctorDetails" element={<DoctorDetails />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shopDetails" element={<ShopDetails />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/wishList" element={<WishList />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/yoga" element={<Yoga1/>} /> */}
            <Route path="/blogLeftSideBar" element={<BlogLeftSideBar />} />
            <Route path="/blogNoSideBar" element={<BlogNoSideBar />} />
            <Route path="/blogTwoColumn" element={<BlogTwoColumn />} />
            <Route path="/blogTwoMasonry" element={<BlogTwoColumnMasonry/>} />
            <Route path="/blogThreeColumn" element={<BlogThreeColumn />} />
            <Route path="/blogThreeColMasonry" element={<BlogThreeColMasonry />} />
            <Route path="/blogDetails" element={<BlogDetails />} />
            <Route path="/blogDetailsLeftSidebar" element={<DetailsLeftSideBar />} />
            <Route path="/blogDetailsAudio" element={<DetailsAudio />} />
            <Route path="/blogDetailsVideo" element={<DetailsVideo />} />
            <Route path="/blogDetailsGallery" element={<DetailsGallery />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/appoinment" element={<Appointment />} />
            <Route path="/portfolioTwoColumn" element={<PortfolioTwoColumn />} />
            <Route path="/portfolioThreeColumn" element={<PortfolioThreeCol />} />
            <Route path="/portfolioSlider" element={<PortfolioSlider />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notMatch" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/map" element={<Map />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/vaccine" element={<Vaccine />} />
            <Route path="/remedy" element={<Remedy />} />
          </Routes>
        </BrowserRouter>
      </AllContext>
      </UserContext.Provider>
    </>
  );
}

export default App;
