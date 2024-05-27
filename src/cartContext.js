import React,{useState,useEffect,useContext} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {useGlobalContext} from './context'
import { useFlutterwave, closePaymentModal  } from 'flutterwave-react-v3';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const CartContext = React.createContext();

const CartProvider =({children})=>{
    const [cart,setCart] = useState(getLocalStorage());
    const [totalItems, setTotalItems] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [shippingFee, setShippingFee] = useState(5.34);
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
      handleAmountChange();
    }, [cart])
    const {user} = useAuth0();
const handleAmountChange =()=>{
  const {total_items,total_amount} = cart.reduce((total,items)=>{
    const {price,amount} = items;
    total.total_items +=amount;
    total.total_amount += price * amount
    return total;
  },{total_items:0,total_amount:0})
  setTotalItems(total_items);
  setTotalAmount(total_amount);
}

    const handleCart=(amount,product,id,mainColor,mainImage)=>{
        const tempItem = cart.find((item)=>item.id === id + mainColor);
        if (tempItem) {
        const tempCart = cart.map((item)=>{
          if (item.id === id + mainColor){
            let newAmount = item.amount + amount;
            if (newAmount > item.max){
              newAmount = item.max
            }
            return {...item,amount:newAmount}
          }
          else{
            return item;
          }
        })
        setCart(tempCart)
        }
        else{
          const newItem = {
            id: id + mainColor,
            name: product.name,
            mainColor,
            amount,
            image: mainImage.url,
            price: product.price,
            max: product.stock
          }
          setCart([...cart, newItem])
        }
        }
        const clearCart=()=>{
          setCart([])
        }
        const deleteItem =(id)=>{
        let tempCart = cart.filter((item)=>item.id !==id)
        setCart(tempCart)
        }
        //FLUTTERWAVE PAYMENT SECTION 
      const config = {
        public_key: "FLWPUBK-c9b551b5c6c576876eae06f908f14f32-X",
        tx_ref: Date.now(),
        amount: `${(((totalAmount/10)+0.09)+shippingFee).toFixed(2)}`,
        currency: "NGN",
        payment_options: "card, mobilemoneyghana, ussd",
        redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
        meta: {
          consumer_id: `zidera-ecommerce-app${user && user.name}${cart.name}${(((totalAmount/10)+0.09)+shippingFee).toFixed(2)}`,
          consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
          email: "ideraoluwaisa2003@gmail.com",
          phone_number: "08086581111",
          name: user && user.name,
        },
        customizations: {
          title: "Comfy sloth store",
          description: `Payment for ${cart.name}`,
          logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
        },
    }
    const handleFlutterPayment = useFlutterwave(config);
    return <CartContext.Provider value={{handleCart,
    handleFlutterPayment,
    cart,
    setCart,
    clearCart,
    totalItems,
    totalAmount,
    shippingFee,
    deleteItem,
    user,
    closePaymentModal}}>
        {children}
    </CartContext.Provider>
}

export const useCartContext =()=>{
    return useContext(CartContext)
}
export {CartContext,CartProvider}