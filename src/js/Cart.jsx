import React, {Component} from 'react';

class Cart extends Component {
  static defaultProps = {selectedProducts: []}
  render() {
    const {selectedProducts} = this.props;
    return (<div>
      <h2>Cart</h2>
      <ul>
        {selectedProducts.map((product, index) => {
          return <li key={index}>{product.name}  {product.price}</li>
        })}
      </ul>
      <p><strong>Total:</strong> {selectedProducts.reduce((sum, sp) => sum=sum+sp.price,0).toFixed(2)}</p>
    </div>);
  }
}

export default Cart;