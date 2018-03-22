import React, { Component } from 'react';

import AuxWrapper from '../../../hoc/AuxWrapper';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // This could be a functional component
  componentWillUpdate() {
    console.log('[Order Summary] WillUpdate');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{igKey}</span>:{' '}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <AuxWrapper>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p style={{ textAlign: 'center', margin: '20px' }}>
          <strong>Your total price is: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </AuxWrapper>
    );
  }
}

export default OrderSummary;
