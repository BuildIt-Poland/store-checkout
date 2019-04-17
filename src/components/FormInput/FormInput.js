// Swiss army knife form Input component
// By default it renders regular text input
// Optinally you can pass any fitting component as Input (useful for select or other non-standard ones)
// Also accepts Icon component (which could be positioned absolutely)

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import Label from './Label';
import ErrorMessage from './ErrorMessage';
import Input from './Input';

const FormInput = ({ name, label, children, icon: Icon, type = 'text', component: Component = Input, ...props }) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <Label>
          {label}
          <Component type={type} error={form.touched[field.name] && form.errors[field.name]} {...field} {...props}>
            {children}
          </Component>
          {form.touched[field.name] && form.errors[field.name] && (
            <ErrorMessage>{form.errors[field.name]}</ErrorMessage>
          )}
          {Icon && <Icon {...field} />}
        </Label>
      )}
    </Field>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  component: PropTypes.func,
  icon: PropTypes.func,
  type: PropTypes.string
};

export default FormInput;
