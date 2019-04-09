import React from 'react';

import { CHECKOUT_DELIVERY_PATH } from '../../constants/routes';
import Page from '../Page';
import InfoBanner from '../InfoBanner';
import Headline from '../Headline';
import NextStep from '../NextStep';
import ShoppingCart from '../ShoppingCart';
import OrderSummary from '../OrderSummary';
import Content from '../Content';

function Cart() {
  return (
    <Page title="Cart">
      <InfoBanner
        children={
          <span>
            you have received <b>free shipping</b>
          </span>
        }
      />
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
