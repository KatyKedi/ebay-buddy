import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import fiveDollar from './5dollar.webp'
import { useQuery } from '@apollo/client';

import './style.css';

const CHECKOUT = `
query($name: String!, $price: Int!) {
    checkout(name: $name, price: $price) {
        session
    }
}`;

const donation = {
    name: 'Donation: $5',
    price: 5
};

const useMakeDonation = token => {
    const [checkout] = useQuery(CHECKOUT);

    checkout({ variables: { donation, token } });
}

function Donation() {

  return (
    <div className="donation">
      <header className="App-header">
      <h3>$5.00</h3> <img id='five' src={fiveDollar} alt='five dollar donation'/>
        <StripeCheckout stripeKey='pk_test_51L3NlJIbWCRjsLJPg9Oew0LGLMS3vhlEQjb3Gs20yY0UCzvBLBdLSQqdFHKpdT2zXQsMO59uZrP1Pr4pmVF9OXiZ00wiD8sf8t' 
                        token={useMakeDonation} 
                        name='Donate'
                        amount={donation.price * 100}>
          <button className='donateBtn' id='donateBtn'>DONATE ${donation.price}</button>
          <p id='donatePage'>Thanks for keeping this app running!</p>
        </StripeCheckout>
      </header>
    </div>
  );
}

export default Donation;