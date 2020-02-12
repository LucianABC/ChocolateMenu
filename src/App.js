import React, { useState, useEffect } from 'react';
import './App.scss';
import ProductList from './components/ProductList/ProductList';
import Actions from './components/Actions/Actions';

function App() {
  const [product, setProduct] = useState();
  const [productList, setProductList] = useState([]);
  
  useEffect(() => {
    if(product == null) return;  
    const clon = [...productList];

    if (product.id == null){
    clon.push({id: clon.length, ...product});
    } else {
      clon.push(product);
    }
    setProductList(clon);
  }, [product])

  return (
    <div className="All">
      <ProductList productList={productList}></ProductList>
      <Actions  setProduct={setProduct} ></Actions>
    </div>
  );
}

export default App;
