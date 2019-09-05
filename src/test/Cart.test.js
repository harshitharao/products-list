import React from 'react';
import {shallow} from 'enzyme';

import Cart from '../js/Cart';

describe('Cart', () => {
  it('should return empty cart products list is empty', () => {
    const selectedProducts=[]
    const cartWrapper = shallow(<Cart selectedProducts={selectedProducts}/>);
    expect(cartWrapper.find('li')).toHaveLength(0);
    expect(cartWrapper.find('p').text()).toEqual('Total: 0.00');
  });

  it('should return cart products list', () => {
    const selectedProducts=[
      {name: 'Pears', price: 10.75},
      {name: 'Dove', price: 20.23},
      {name: 'Dove', price: 20.23},
    ];
    const cartWrapper = shallow(<Cart selectedProducts={selectedProducts}/>);
    expect(cartWrapper.find('li')).toHaveLength(3);
    expect(cartWrapper.find('p').text()).toEqual('Total: 51.21');
  });
});