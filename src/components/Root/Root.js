// Root of application
// Home of various root providers (such as redux or router) and css global styles

import '../../styles/sanitize.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';
import GlobalStyle from '../GlobalStyle';
import ErrorBoundary from '../ErrorBoundary';
import ScrollToTop from '../ScrollToTop';

function Root({ store }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <ErrorBoundary>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
