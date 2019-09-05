import React from 'react';
import ReactDOM from 'react-dom';
import App from '../js/App';
import {mount} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('should return empty selected products when nothing is added to cart', () => {
    const appWrapper = mount(<App/>);
    expect(appWrapper.find('h1').text()).toEqual('Shopping Zone');
    expect(appWrapper.find('ProductsList')).toHaveLength(1);
    expect(appWrapper.find('p').text()).toEqual('Total: 0.00');
  });

  it('should return selected products with total amount', () => {
    const appWrapper = mount(<App/>);
    expect(appWrapper.find('h1').text()).toEqual('Shopping Zone');
    expect(appWrapper.find('ProductsList')).toHaveLength(1);
    expect(appWrapper.find('p').text()).toEqual('Total: 0.00');

    const firstItem = appWrapper.find('li').at(0);
    expect(firstItem.text()).toContain('Pears');

    firstItem.find('button').simulate('click');
    expect(appWrapper.find('Cart').find('li')).toHaveLength(1);
    expect(appWrapper.find('p').text()).toEqual('Total: 10.75');

    firstItem.find('button').simulate('click');
    expect(appWrapper.find('Cart').find('li')).toHaveLength(2);
    expect(appWrapper.find('p').text()).toEqual('Total: 21.50');

    appWrapper.find('li').at(1).find('button').simulate('click');
    expect(appWrapper.find('Cart').find('li')).toHaveLength(3);
    expect(appWrapper.find('p').text()).toEqual('Total: 41.73');
  });

  it('should return filtered products', () => {
    const appWrapper = mount(<App/>);
    expect(appWrapper.find('h1').text()).toEqual('Shopping Zone');

    const listWrapper = appWrapper.find('ProductsList');
    expect(listWrapper.find('li')).toHaveLength(4);

    appWrapper.find('input').simulate('change', {target: {value: 'o'}});
    expect(appWrapper.find('ProductsList').find('li')).toHaveLength(2);

    expect(appWrapper.find('p').text()).toEqual('Total: 0.00');

    const firstItem = appWrapper.find('li').at(0);
    expect(firstItem.text()).toContain('Dove');

    appWrapper.find('input').simulate('change', {target: {value: ''}});
    expect(appWrapper.find('ProductsList').find('li')).toHaveLength(4);

    expect(appWrapper.find('li').at(0).text()).toContain('Pears');
  });
});

