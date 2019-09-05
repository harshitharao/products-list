import React, { Component } from 'react';

class ProductsList extends Component {
  static defaultProps = {products: []}
  render() {
    return (<ul>
      {this.props.products.map((product,index) => {
        return <li key={index}>{product.name}  {product.price}</li>
      })}
    </ul>)
  }
}

export default ProductsList;