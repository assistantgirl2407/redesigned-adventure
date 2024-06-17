import React  from "react";
import './showcase.style.css';
import Navbar from "../layouts/navbar/Navbar";
import SearchinputForm from "../forms/searchinputForm/SearchinputForm";



 const Showcase = ()=>{
    return(
        <section className="showcase-container">

       <Navbar darkTheme={false}/>

            <div className="overlay"></div>
        <div className="showcase-content">
            <h1>Best Books Available</h1>
            <p>Buy quality books at cheaper price</p>

            <SearchinputForm darkTheme={true}/>
        </div>
       
        </section>
    )
 }
 export default Showcase;