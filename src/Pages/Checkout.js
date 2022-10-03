import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar'
import {useCartContext} from '../cartContext'
import {Link} from 'react-router-dom'
import './Checkout.css'

const Checkout =()=>{
    const {cart,user,totalAmount,shippingFee,handleFlutterPayment,closePaymentModal} = useCartContext();
    return(
        <div>
            <Navbar/>
            <Sidebar/>
            <div className='checkout-header'>
                 <h1 className='checkout-header-text'><Link
                 style={{textDecoration:'none'}} to='/'><span className='span'>Home</span></Link> / Checkout</h1>
             </div>
            {cart.length < 1 ? <div className='checkout-empty-cart'>
                  <h1 className='empty-checkout-header'>Your cart is empty</h1>
                  <Link to='/products'><button className='empty-checkout-button'>FILL IT</button></Link>
              </div> : <div className='checkout-container'>
              <h1 className='checkout-heading'>Hello, {user&& user.name}</h1>
              <p className='checkout-text'>Your total is ₦{(((totalAmount/10)+0.09)+shippingFee).toFixed(2)}</p>
              <button className='cart-checkout' onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal()
            },
            onClose: () => {},
          });
        }}>Pay Now</button>
              </div>}
            <Footer/>
        </div>
    )
}
export default Checkout;