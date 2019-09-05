import React from 'react';
import ReactDOM from 'react-dom'
import ProductsList from '../js/ProductsList'

describe('ProductsList', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductsList/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});