import React from "react";
import './ProductListingAll.style.css' ;
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';

import { BookData } from "../../../util/BookData";

const ProductListingAll = ()=>{
  // console.log(BookData);
    return(
      <section  className="product-listing-all-container">
       <div className="container">
        <div className="grid-container">
        
             {BookData.map((book)=>{
              return(
                <div key={book.id} className="grid-item">
                <ProductListingCard  bookData={book}/>
              </div>
              )
             })}

         

           {/* <div className="grid-item">
             <ProductListingCard/>
           </div>

           <div className="grid-item">
             <ProductListingCard/>
           </div>

           <div className="grid-item">
             <ProductListingCard/>
           </div>

           <div className="grid-item">
             <ProductListingCard/>
           </div>

           <div className="grid-item">
             <ProductListingCard/>
           </div>

           <div className="grid-item">
             <ProductListingCard/>
           </div>

           <div className="grid-item">
             <ProductListingCard/>
           </div>

           <div className="grid-item">
             <ProductListingCard/>
           </div> */}
        </div>
    </div>
      </section>
    )        
}
export default ProductListingAll ; 