import React from "react";
import logo2 from '../../assets/logo2.png'
import Navbar from "../../components/layouts/navbar/Navbar";
import AuthForm from "../../components/forms/authform/AuthForm";

const Login =()=>{
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
          <h2>Login</h2>
          <p>SignIn With Email And Password. </p>

         <AuthForm buttonName="Login"/>

       </div>

       </div>
    </div>
        </section>

        </React.Fragment>
    )
}
export default Login;