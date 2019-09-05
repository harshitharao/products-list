import React from 'react';
import '../App.css';
import ProductsList from "./ProductsList";

function App() {
  const products = [
    {name: 'Pears', price: 10.75},
    {name: 'Dove', price: 20.23},
    {name: 'Mysore sandal', price: 30.61},
    {name: 'lux', price: 5.5},
  ];
  return (
    <div className="App">
      <h1>Shopping Zone</h1>
      <ProductsList products={products}/>
    </div>
  );
}

export default App;
