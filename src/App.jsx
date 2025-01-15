import React from "react";

import Header from "./component/Header";
import About from "./component/About";
import Projects from "./component/Projects";
import Testimonials from "./component/Testimonials";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

 import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  return (
    <div className=" w-full overflow-hidden" >
      <ToastContainer/>
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact/>  
      <Footer/>
      
    </div>
  );
};

export default App;
