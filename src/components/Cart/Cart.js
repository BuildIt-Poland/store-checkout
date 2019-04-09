import React from 'react';

import { CHECKOUT_DELIVERY_PATH } from '../../constants/routes';
import Page from '../Page';
import Headline from '../Headline';
import NextStep from '../NextStep';
import ShoppingCart from '../ShoppingCart';
import OrderSummary from '../OrderSummary';
import Content from '../Content';

function Cart() {
  return (
    <Page title="Cart">
      <Content>
        <Headline>Cart</Headline>
        <ShoppingCart />
      </Content>
      <OrderSummary />
      <NextStep label="Checkout" to={CHECKOUT_DELIVERY_PATH} />
    </Page>
  );
}

export default Cart;
