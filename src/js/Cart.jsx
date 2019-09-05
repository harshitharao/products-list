import React, {Component} from 'react';

class Cart extends Component {
  static defaultProps = {selectedProducts: []}
  render() {
    const {selectedProducts} = this.props;
    return (<div>
      <ul>
        {selectedProducts.map((product, index) => {
          return <li key={index}>{product.name}  {product.price}</li>
        })}
      </ul>
      <p>Total: {selectedProducts.reduce((sum, sp) => sum=sum+sp.price,0)}</p>
    </div>);
  }
}

export default Cart;