import React from "react";
import {NavLink, } from "react-router-dom";


function About() {
    return(
      <section className="main-page" >
        
        <section className="navigation" >
        <NavLink
                  style={({isActive}) => isActive ? {color: 'white'} : {color: 'black'}}
  
                   className="navigate" to="/" >
                    Home Page
                  </NavLink>
               <NavLink
               style={({isActive}) => isActive ? {color: 'white'} : {color: 'black'}}
                className="navigate" to="/about">
                  About Page
                </NavLink>

                <NavLink
               style={({isActive}) => isActive ? {color: 'white'} : {color: 'black'}}
                className="navigate" to="/contact">
                  contact Page
                </NavLink>

                <h1 className="headings" >ABOUT PAGE</h1>


        </section>
      </section> 
    );
  }

  export default About;