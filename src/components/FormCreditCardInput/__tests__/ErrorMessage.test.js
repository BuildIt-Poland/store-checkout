import React from 'react';
import { create } from 'react-test-renderer';

import ErrorMessage from '../ErrorMessage';

describe('COMPONENT - FormCreditCardInput ErrorMessage', () => {
  it('renders correctly', () => {
    const component = create(<ErrorMessage />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
