import React, { useState } from 'react';
import './App.scss';
import ProductList from './components/ProductList/ProductList';
import Actions from './components/Actions/Actions';

function App() {

  const [product, setProduct] = useState({});
  console.log(product);
  return (
    <div className="All">
      <ProductList product={product}></ProductList>
      <Actions  setProduct={setProduct}></Actions>
    </div>
  );
}

export default App;
