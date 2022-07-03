import React from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import StripeCheckout from '../components/StripeCheckout'
import '../stripe.css'

const promise=loadStripe('pk_test_51LGNsuSGibpL3rGjI6Qwjiaoahs28Ozu2YPNqULY92tIw7HIGDao1vOC63vXlWsBlcyUmRjQPjfEoS1Vmdg10D2P00oiJ6bCWW')
const Payment = () => {
  return (
    <div className='container p-5 text-center'>
        <h4 >Complete your Purchase</h4>
        <Elements stripe={promise}>
            <div className='col-md-8 offset-md-2'>
                <p><StripeCheckout/></p>
            </div>
        </Elements>
       
        </div>
  )
}

export default Payment