import React, { useState, useEffect } from 'react';
import './App.scss';
import ProductList from './components/ProductList/ProductList';
import Actions from './components/Actions/Actions';

function App() {
  const [product, setProduct] = useState();
  const [productList, setProductList] = useState([]);
  const [editedProduct, setEditedProduct] = useState();
  console.log(editedProduct);
  useEffect(() => {
    if(product == null) return;  
    const clon = [...productList];

    clon.push({id: clon.length, ...product});

    setProductList(clon);
  }, [product])

  return (
    <div className="All">
      <ProductList productList={productList}
                   setEditedProduct={setEditedProduct}></ProductList>
      <Actions  setProduct={setProduct} ></Actions>
    </div>
  );
}

export default App;
