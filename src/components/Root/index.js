// Root of application
// Home of various root providers, such as redux or router

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import App from '../App';

function Root({ store }) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
