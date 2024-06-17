import React from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer"
import CartitemsContainer from "../../components/layouts/card-items-container/CarditemsContainer";


const CartPage = ()=>{

    return(
        <section>
        <Navbar darkTheme={true}/>
 
          <CartitemsContainer/>

        <Footer/>
       
        </section>
    )
}

export default CartPage;