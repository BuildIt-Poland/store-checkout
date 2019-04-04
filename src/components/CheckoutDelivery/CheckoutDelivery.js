import React from 'react';

import { CHECKOUT_PAYMENT_PATH } from '../../constants/routes';
import Page from '../Page';
import Headline from '../Headline';
import Content from '../Content';
import ModalTrigger from '../ModalTrigger';
import Text from '../Text';
import NextStep from '../NextStep';
import SectionHeader from '../SectionHeader';

const SHIPPING_DETAILS_MODAL_CONTENT =
  'Items being shipped may need to be divided into two or more shipments. This will not affect shipping charges.';

function CheckoutDelivery() {
  const modalTrigger = (
    <ModalTrigger title="Shipping &amp; Pickup Options" content={SHIPPING_DETAILS_MODAL_CONTENT}>
      <Text underline>Open modal</Text>
    </ModalTrigger>
  );

  return (
    <Page>
      <Content>
        <Headline>Delivery</Headline>
        <section>
          <SectionHeader actionElement={modalTrigger}>Shipping Address</SectionHeader>
        </section>
      </Content>
      <NextStep label="Continue to Payment" to={CHECKOUT_PAYMENT_PATH} />
    </Page>
  );
}

export default CheckoutDelivery;
