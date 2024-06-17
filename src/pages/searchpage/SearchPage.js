import React ,{useState ,useEffect} from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/Footer";
import './SearchPage.style.css' ;
import { BookData } from "../../util/BookData";
import SearchResultCard from "../../components/cards/search-result-card/SearchResultCard";


const SearchPage = () =>{
 const location = useLocation();
const [searchResult , setSearchResult] = useState([]);

//create search funtionality 
useEffect(()=>{
let searchValue = [];

searchValue = BookData.filter((data) => data.book_name.toLowerCase().includes(location.state.toLowerCase()));

setSearchResult(searchValue);

},[]);

    return(
<section>
<Navbar darkTheme={true}/>

<div className="search-result-container">
<div className="container">
<h2>Your serch result</h2>

  
{searchResult.map((result)=>(
    <SearchResultCard key={result.id} bookData={result}/>
))}

</div>
</div>

<Footer/>
</section> 
    )
}

export default SearchPage;