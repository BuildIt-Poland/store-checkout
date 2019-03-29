import React from 'react';

import { CHECKOUT_DELIVERY } from '../../constants/routes';
import NextStep from '../NextStep';

function Cart() {
  return (
    <>
      <section>
        <h2>Cart placeholder</h2>
      </section>
      <NextStep label="Checkout" to={CHECKOUT_DELIVERY} />
    </>
  );
}

export default Cart;
