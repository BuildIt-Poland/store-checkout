import React from 'react';
import { Link } from 'react-router-dom';

import { CHECKOUT_DELIVERY_PATH } from '../../constants/routes';
import SectionHeader from '../SectionHeader';
import TextLink from '../TextLink';
import AddressDetails from '../AddressDetails';
import ItemsList from '../ItemsList';
import Content from '../Content';

function ShippingSummary() {
  const textLink = (
    <TextLink as={Link} to={CHECKOUT_DELIVERY_PATH}>
      Edit
    </TextLink>
  );

  return (
    <>
      <Content>
        <SectionHeader actionElement={textLink}>Shipping Details</SectionHeader>
        <AddressDetails title="Shipping Address" />
      </Content>
      <ItemsList />
    </>
  );
}

export default ShippingSummary;
