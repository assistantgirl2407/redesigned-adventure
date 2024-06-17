import React  from "react";
import './Signup.style.css' ;
import logo2 from '../../assets/logo2.png'
import Navbar from "../../components/layouts/navbar/Navbar";
import AuthForm from "../../components/forms/authform/AuthForm";

const Signup =()=>{

    
    return(
<React.Fragment>

<Navbar darkText={true}/>

        <section className="signup-container">
    <div className="signup-img-container">
         <img src={logo2} alt="authentication-background" />
    </div>
    <div className="signup-content-container">

        <div className="container">

       <div className="content-wrapper">
          <h2>Signup</h2>
          <p>Create a New Account With Email And Password. </p>

           <AuthForm buttonName="Sign Up"/>

       </div>

       </div>
    </div>
        </section>

        </React.Fragment>
    )
}
export default Signup;