import React  from "react";
import Showcase from "../../components/showcase/Showcase";
import ProductListing from "../../components/layouts/navbar/productlisting/ProductListing";
import Footer from "../../components/layouts/footer/Footer";
const HomePage = () => {
    return (
     <section>
      <Showcase/>
      <ProductListing/>
      <Footer/>

     </section>
    )
}
 export default HomePage;