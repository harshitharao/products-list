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
    expect(appWrapper.find('p').text()).toEqual('Total: 0');
  });

  it('should return selected products with total amount', () => {
    const appWrapper = mount(<App/>);
    expect(appWrapper.find('h1').text()).toEqual('Shopping Zone');
    expect(appWrapper.find('ProductsList')).toHaveLength(1);
    expect(appWrapper.find('p').text()).toEqual('Total: 0');

    const firstItem = appWrapper.find('li').at(0);
    expect(firstItem.text()).toContain('Pears');

    firstItem.find('button').simulate('click');
    expect(appWrapper.find('Cart').find('li')).toHaveLength(1);
    expect(appWrapper.find('p').text()).toEqual('Total: 10.75');

    firstItem.find('button').simulate('click');
    expect(appWrapper.find('Cart').find('li')).toHaveLength(2);
    expect(appWrapper.find('p').text()).toEqual('Total: 21.5');
  });
});

