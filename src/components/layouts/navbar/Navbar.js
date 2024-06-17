import React , {useContext} from "react";
import './Navbar.style.css';
import { Link ,useNavigate} from "react-router-dom";
import { UserContext } from "../../../App";
import {ReactComponent as Cart} from '../../../assets/cart.svg';
import { getAuth , signOut } from "firebase/auth";
import app from '../../../firebase/Firebase';


const Navbar = ({darkTheme , darkText})=>{
    
    const user  = useContext(UserContext);
    const auth = getAuth (app);

    const navigate = useNavigate();

    const handleLogout = ()=>{
        signOut(auth).then(()=>{
      navigate('/');
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  // show login ans signup 

    const showLoginAndSignUp = (

        <nav className="nav-links-container">
          <Link to="/" className={`${darkText ? 'nav-links-dark' : 'nav-links'}`}>Home </Link>
          <Link to="/books" className={`${darkText ? 'nav-links-dark' : 'nav-links'}`}>Books </Link>
          <Link to="/login" className={`${darkText ? 'nav-links-dark' : 'nav-links'}`} >Login</Link>
          <Link to="/signup" className={`${darkText ? 'nav-links-dark' : 'nav-links'}`}>Sign Up</Link>
          </nav>
    )

    //logout and cart section

    const showLogoutAndCart = (

        <nav className="nav-links-container">
          <Link to="/" className={`${darkText ? 'nav-links-dark' : 'nav-links'}`}>Home </Link>
          <Link to="/books" className={`${darkText ? 'nav-links-dark' : 'nav-links'}`}>Books </Link>
          <a href="logout" onClick={handleLogout} className={`${darkText ? 'nav-links-dark' : 'nav-links'}`} >Logout</a>
          <Link to="/cart" className="cart-link"> <Cart/> </Link>
          </nav>

    )

    return(
        <section className={`navbar-container ${darkTheme ? 'background-dark relative' : 'background-transparent'}`}>
           <div className="container flex justify-between align-center">
           <a href="logo" className="logo">BookishBoutique</a>

         {user ? showLogoutAndCart : showLoginAndSignUp}

           </div>
        </section>
    )
}
export default Navbar ;