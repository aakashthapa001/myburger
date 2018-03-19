import React from 'react';

import AuxWrapper from '../../../hoc/AuxWrapper';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
        </li>
      );
    });

  return (
    <AuxWrapper>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p style={{ textAlign: 'center', margin: '20px' }}><strong>Your total price is: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </AuxWrapper>
  )
};

export default orderSummary;
