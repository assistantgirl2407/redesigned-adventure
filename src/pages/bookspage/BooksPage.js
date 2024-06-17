import React from 'react';
import './BooksPage.style.css';
import Navbar from '../../components/layouts/navbar/Navbar';
import SearchInputForm from '../../components/forms/searchinputForm/SearchinputForm';
import ProductListingAll from '../../components/layouts/productlistingall/ProductListingAll';
import Footer from '../../../src/components/layouts/footer/Footer';


const BooksPage = () =>{
    return(
        <section>
        <Navbar darkTheme={true}/>

        <div className='search-container'>
            <h2><i>Finds The Books That You Wants</i> </h2>
        <SearchInputForm darkTheme={false}/>
        </div>
        <ProductListingAll/>
        <Footer/>
        </section>
    )
}
export default BooksPage;