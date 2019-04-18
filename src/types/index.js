// Centralised type definitions for commonly used ones

import { shape, number, string, oneOfType } from 'prop-types';

export const itemVariants = shape({
  size: string,
  color: string
});

export const itemPrice = shape({
  regular: number.isRequired,
  discount: number
});

export const item = shape({
  id: string.isRequired,
  name: string.isRequired,
  imgUrl: string.isRequired,
  variants: itemVariants.isRequired,
  price: itemPrice.isRequired,
  quantity: number.isRequired
});

export const address = shape({
  firstName: string.isRequired,
  lastName: string.isRequired,
  street: string.isRequired,
  city: string.isRequired,
  state: string.isRequired,
  zipCode: string.isRequired,
  phone: string.isRequired
});

export const paymentInfo = shape({
  cardNumber: oneOfType([string, number]).isRequired,
  expMonth: oneOfType([string, number]).isRequired,
  expYear: oneOfType([string, number]).isRequired,
  securityCode: oneOfType([string, number]).isRequired
});
