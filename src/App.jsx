import { useEffect } from "react";
import Hero from "./component/Hero/Hero"
import Navbar from "./component/Navbar/Navbar"
import Products from "./component/Products/Products"

import AOS from "aos";
import "aos/dist/aos.css";

function App() {

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
    <div>
      <Navbar />
      <Hero />
      <Products />
    </div>
  )
}

export default App
