import React, { Component } from 'react'
// ref: https://www.npmjs.com/package/react-stripe-checkout
import StripeCheckout from 'react-stripe-checkout'

class Payments extends Component {

  render () {
    return (
      <StripeCheckout
        amount={ 500 } // US cents
        token={ token => console.log(token) } // cb when token received from API
        stripeKey={ process.env.REACT_APP_STRIPE_PUB_KEY }
        name="Emaily"
        description="$5 for 5 email credits."
      >
        <div className="btn btn-info">
          Add Credits
        </div>
      </StripeCheckout>
    )
  }
}

export default Payments
