import React from 'react';
import ReactDOM from 'react-dom'
import ProductsList from '../js/ProductsList'
import {shallow} from 'enzyme';

describe('ProductsList', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductsList/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render products list with no content', () => {
    const products = [];
    const productListWrapper = shallow(<ProductsList products={products}/>);
    expect(productListWrapper.find('li')).toHaveLength(0);
  });

  it('should render products list', () => {
    const products = [
      {name: 'Pears', price: 10.75},
      {name: 'Dove', price: 20.23},
      {name: 'Mysore sandal', price: 30.61},
      {name: 'lux', price: 5.5},
    ];
    const productListWrapper = shallow(<ProductsList products={products}/>);
    expect(productListWrapper.find('li')).toHaveLength(4);
  });
});