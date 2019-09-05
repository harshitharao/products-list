import React, {Component} from 'react';

class Cart extends Component {
  static defaultProps = {selectedProducts: []}
  render() {
    return (<div>
      <ul>
        {this.props.selectedProducts.map((product, index) => {
          return <li key={index}>{product.name}  {product.price}</li>
        })}
      </ul>
      Total: {}
    </div>);
  }
}

export default Cart;