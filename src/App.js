import React , { useState ,useEffect , createContext} from "react";
import { Routes,Route } from "react-router-dom";
import app from "./firebase/Firebase";
import { getAuth,onAuthStateChanged } from "firebase/auth";

import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BooksPage";
import CartPage from "./pages/cartpage/CartPage";
import BookDetails from "./pages/bookdetailspage/BookDetails";
import Signup from "./pages/signuppages/Signup";
import Login from "./pages/loginpage/Login";
import ScrollToTop from "./components/scroll/ScrollToTop";
import SearchPage from "./pages/searchpage/SearchPage";

export const UserContext = createContext({});
export const CartContext = createContext({});


const App = () =>{
  const auth = getAuth(app);
 const [authenticatedUser , setAuthenticatedUser] = useState(null)
 const [cartItems , setCartItems] = useState([]);
const [totalAmount , setTotalAmount] = useState(0);

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
    if(user) {
    
     setAuthenticatedUser(user);

    }else{
      setAuthenticatedUser(null)
    }
   })
  },[]);

    useEffect(() =>{
   let total = 0 ;
   cartItems.forEach((item)=>{
    total = total + parseInt(item.price);
   })

   setTotalAmount(total);

    },[cartItems])


  return(
    
    <ScrollToTop>

    <UserContext.Provider value = {authenticatedUser}>
      <CartContext.Provider value={{cartItems , totalAmount , setCartItems}} >
      <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/books" element={<BooksPage/>}/>
     <Route path="/cart" element={<CartPage/>}/>
     <Route path="/search" element={<SearchPage/>}/>
     <Route path="/book-details/:id" element={<BookDetails/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>} />
     </Routes>
     </CartContext.Provider>

    </UserContext.Provider>

    </ScrollToTop>
  )
}

export default App;
