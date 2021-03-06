// Generic error component

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

function Error({ message = 'Oops, something went wrong.' }) {
  return <Wrapper role="alert">{message}</Wrapper>;
}

Error.propTypes = {
  /** Content of error message */
  message: PropTypes.string
};

export default Error;
