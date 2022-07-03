import React, { useEffect, useState } from 'react'
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js'
import { useDispatch,useSelector } from 'react-redux'
import { createPaymentIntent } from '../functions/stripe'
import { Link } from 'react-router-dom'
import { createOrder, emptyCart } from '../functions/user'
import {Card} from 'antd'
import {DollarOutlined,CheckOutlined} from '@ant-design/icons'
import Laptop from '../images/laptop.png'

const StripeCheckout = () => {
 const dispatch=useDispatch();
 const {user}=useSelector((state)=>({...state}))

 const[succeeded,setSucceeded]=useState(false)
 const[error,setError]=useState(null)
 const[processing,setProcessing]=useState(false)
 const[disabled,setDisabled]=useState(true)
 const[clientSecret,setClientSecret]=useState("")
const [cartTotal,setCartTotal]=useState(0);
const [payable,setPayable]=useState(0)

    const stripe=useStripe();
    const elements=useElements();

    useEffect(()=>{
        createPaymentIntent(user.token)
        .then(res=>{
            console.log('hey')
            console.log('create payment intent',res)
            setClientSecret(res.data.clientSecret)
            setCartTotal(res.data.cartTotal)
            setPayable(res.data.cartTotal)
        })
    },[])

    const handleSubmit=async(e)=>{
      e.preventDefault()
      setProcessing(true)
      const payload=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
          card:elements.getElement(CardElement),
          billing_details:{
            name: e.target.name.value
          },
        },

      })

      if(payload.error){
        setError(`Payment failed ${payload.error.message}`)
        setProcessing(false)
      }
      else{

         createOrder(payload,user.token)
        .then((res)=>{
          if(res.data.ok){
            if(typeof window!=='undefined' ) localStorage.removeItem('cart');

            dispatch({
              type:'ADD_TO_CART',
              payload:[]
            });

            emptyCart(user.token);
          }
        })
         


        console.log(JSON.stringify(payload,null,4));
        setError(null);
        setProcessing(false)
        setSucceeded(true)
      }
        //
    }
    const handleChange=async(e)=>{

      setDisabled(e.empty)
      setError(e.error?e.error.message:"")
        //
    }
    const cartStyle = {
        style: {
          base: {
            color: "#32325d",
            fontFamily: "Arial, sans-serif",
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#32325d",
            },
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
          },
        },
      };

    return (
        <>
       
        <div className='text-center pb-5'>
        <Card
          cover={
            <img
             src={Laptop}
             style={{
              height:'200px',
              objectFit:'contain',
              marginBottom:'-50px',
             }}
            />
          }
          actions={[
            <>
              <DollarOutlined className='text-info'  /> <br/>Cart Total: Rs.{cartTotal}
            </>,
            <>
              <CheckOutlined className='text-info'/> <br/> Total Payable : Rs.{payable}
            </>
          ]}
        />

        </div>

       
         <form id='payment-form' className='stripe-form' onSubmit={handleSubmit}>
             <CardElement 
             id='card-element'
             options={cartStyle}
             onChange={handleChange}
             />
          <button className='stripe-button' disabled={processing || succeeded || disabled}>

              <span id='button-text'>
                  {processing?<div className='spinner' id='spinner'></div>:"Pay"}
              </span>
          </button>
        {error && (
          <div className='card-error' role='alert'>
            {error}
          </div>
        )}

         </form>
         {/* <p className={succeeded?"result-message": "result-message hidden"}>
          Payment Successful.{" "}
          <Link to='/user/history'> See it on your purchase history</Link>
          </p> */}
        </>
    )

}

export default StripeCheckout