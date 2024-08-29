import { useEffect, useState } from "react";
import Hero from "./component/Hero/Hero"
import Navbar from "./component/Navbar/Navbar"
import Products from "./component/Products/Products"
import TopProducts from "./component/TopProducts/TopProducts";
import Banner from "./component/Banner/Banner";
import Subscribe from "./component/Subscribe/Subscribe";


import AOS from "aos";
import "aos/dist/aos.css";
import Testimonial from "./component/Testimonial/Testimonial";
import Footer from "./component/Footer/Footer";
import Popup from "./component/Popup/Popup";


function App() {

  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }


  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  },[])


  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner />
      <Subscribe />
      <Products />
      <Testimonial />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App
