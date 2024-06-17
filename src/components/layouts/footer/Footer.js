import React ,{useRef} from "react";
import './Footer.style.css';
import emailjs from '@emailjs/browser';


const Footer =()=>{

   const form = useRef();
  const serviceId = "service_89xknvr";
const  templateId = "template_b0s4n8n";
const publicKey = "_kItGqs7Sdb5H9lUx"


   const handleSubmit = (e)=>{
       e.preventDefault();

      emailjs.sendForm(serviceId,templateId,form.current,publicKey)
      .then((response)=>{
         console.log(response.text);
      })
      .catch((error)=>{
         console.log(error.text)
      })
      e.target.reset();
   }

    return(
      
      <section className=" footer-container">
         <div className="container">
            <h2>If You Have Any Queries Feel Free To Ask Here.</h2>
         
         <form onSubmit={handleSubmit} ref={form} className="footer-form">

            <div className="form-group">
            <label htmlFor="name" className="form-lable">Name</label>
           <input type="text" name="user_name" className="form-input" placeholder="Enter Your Name"/>
            </div>

            <div className="form-group">
            <label htmlFor="email" className="form-lable">Email</label>
             <input type="text" name="user_email" className="form-input" placeholder="Enter Your Email"/>
            </div>

            <div  className="form-group">
            <label htmlFor="query" className="form-lable">Query</label>
              <textarea className="form-input" name="message" placeholder="Type Your Query "></textarea>
            </div>

            <div className="form-group">
           <input type="submit" value="Submit" className="form-submit" />
            </div>


         </form>
         <p>&copy; 2024 Bookish Boutiqe. All Rights Reaserved.. </p>
         </div>
      </section>
    )
}

export default Footer ;