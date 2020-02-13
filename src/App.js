import React, { useState, useEffect } from 'react';
import './App.scss';
import ProductList from './components/ProductList/ProductList';
import Actions from './components/Actions/Actions';

function App() {
  const [product, setProduct] = useState();
  const [productList, setProductList] = useState([]);
  const [id, setId] = useState();
  const [prodToEdit, setProdToEdit]=useState();
  
  useEffect(() => {
    if(product == null) return;  
    const clon = [...productList];
    if (product.id==undefined ){   
      clon.push({id: clon.length, ...product});
    }else {
      clon[product.id]=product;
      setId(undefined);
    }
    setProductList(clon);
  }, [product]);

  useEffect(()=>{
    let productToEdit = productList[id];
    setProdToEdit(productToEdit);
  }, [id]);

  return (
    <div className="All">
      <ProductList productList={productList}
                   setId={setId}></ProductList>
      <Actions  setProduct={setProduct}   
                prodToEdit={prodToEdit} ></Actions>
    </div>
  );
}

export default App;
