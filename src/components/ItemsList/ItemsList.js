import React from 'react';
import PropTypes from 'prop-types';

import { item } from '../../types';
import ErrorBoundary from '../ErrorBoundary';
import Item from '../Item';
import Wrapper from './Wrapper';
import List from './List';

function ItemsList({ items }) {
  return (
    <ErrorBoundary>
      <Wrapper>
        <List as="ul">
          {items.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </List>
      </Wrapper>
    </ErrorBoundary>
  );
}

ItemsList.propTypes = {
  items: PropTypes.arrayOf(item)
};

export default ItemsList;
