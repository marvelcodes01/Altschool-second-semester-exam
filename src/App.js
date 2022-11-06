import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import PageNotFound from './Pages/PageNotFound';
import Contact from './Pages/Contact';

  

function App() {

  return (
  <section className="main-container" >
   <Routes>
    <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="*"  element={<PageNotFound />} />
           
      
   </Routes>
      
      

   

  </section> 
  );
}
export default App;
