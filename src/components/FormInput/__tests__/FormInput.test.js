import React from 'react';
import { create } from 'react-test-renderer';
import { Formik } from 'formik';

import FormInput from '../FormInput';

describe('COMPONENT - FormInput', () => {
  it('renders correctly', () => {
    const props = {
      name: 'firstName',
      label: 'First Name',
      placeholder: 'Type first name here...',
      type: 'text'
    };
    const component = create(
      <Formik
        initialValues={{
          firstName: ''
        }}
      >
        <FormInput {...props} />
      </Formik>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly when Icon is passed', () => {
    function TestIcon() {
      return 'TestIcon';
    }

    const props = {
      name: 'firstName',
      label: 'First Name',
      placeholder: 'Type first name here...',
      type: 'text'
    };

    const component = create(
      <Formik
        initialValues={{
          firstName: ''
        }}
      >
        <FormInput {...props} icon={TestIcon} />
      </Formik>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
