import React from 'react';
import { Form as FormikForm } from 'formik';

import Text from '../Text';
import FormCreditCardInput from '../FormCreditCardInput';
import FormInput from '../FormInput';
import FormSelect from '../FormSelect';
import Row from './Row';
import { generateMonths, generateYears } from './optionsBuilder';

const expMonthOptions = generateMonths();
const expYearsOptions = generateYears();

function Form() {
  return (
    <FormikForm>
      <Text dimmed>Please enter your card info. All fields are required.</Text>
      <FormCreditCardInput name="cardNumber" label="Card Number" maxLength="19" />
      <Row>
        <FormSelect name="expMonth" label="Exp. Month" options={expMonthOptions} />
        <FormSelect name="expYear" label="Exp. Year" options={expYearsOptions} />
        <FormInput name="securityCode" type="password" label="CCV" maxLength="4" />
      </Row>
    </FormikForm>
  );
}

export default Form;
