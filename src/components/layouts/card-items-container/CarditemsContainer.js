import React , {useContext} from 'react';
import './CarditemsContainer.style.css';
import CartItemCard from '../../cards/product-listing-card/cart-item-card/CartItemCard';
import { CartContext } from '../../../App';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';

const CartitemsContainer =()=>{

    const {cartItems ,totalAmount} = useContext(CartContext);
  const stripeKey = 'pk_test_VvWjqy13EI2MSDgDxy3b5jbx00KrrL41yi';
 const navigate = useNavigate();


  const onToken = (token) =>{
    console.log(token);
    alert('Your Payment has been processed')
    navigate('/books')
  }

    return(
    <section className="cart-items-container">
    <div className="container">
   {totalAmount === 0 ? (
    <h2>Currently Your Cart Is Empty</h2>
   ):(
    <React.Fragment>

<h2>Cart</h2>
   
   {cartItems.map((item)=>(
    <CartItemCard key={item.id} bookData = {item} />
   ))}

<h2>Total Amount = &#8377;{totalAmount}</h2>



<StripeCheckout

name="Book Checkout"
description="Pleas Fill in the details below"
amount={totalAmount * 100}
currency="INR"
stripeKey={stripeKey}
token={onToken}
billingAddress
>
<button className="button-primary">Proceed to Checkout</button>
</StripeCheckout>

    </React.Fragment>
   )}
    </div>

   </section>
    )
}
export default CartitemsContainer;
