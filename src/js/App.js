import React, {Component} from 'react';
import '../App.css';
import ProductsList from "./ProductsList";
import Cart from "./Cart";

const products = [
  {name: 'Pears', price: 10.75},
  {name: 'Dove', price: 20.23},
  {name: 'Mysore sandal', price: 30.61},
  {name: 'lux', price: 5.5},
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products, selectedProducts: [] }
  }

  onAdd = (product) => {
    this.setState({ selectedProducts: this.state.selectedProducts.concat(product) })
  };

  filter = (e) => {
    this.setState({ products: products.filter(p => p.name.includes(e.target.value)) })
  };

  render() {
    return (
      <div className="App">
        <h1>Shopping Zone</h1>
        <input onChange={(e) => this.filter(e)}></input>
        <ProductsList products={this.state.products} onAdd={this.onAdd}/>
        <Cart selectedProducts={this.state.selectedProducts}/>
      </div>
    );
  }
}

export default App;
