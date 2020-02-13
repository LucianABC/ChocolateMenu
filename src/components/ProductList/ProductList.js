import React from 'react';
import './ProductList.scss';
import Product from '../Product/Product';


const ProductList = ({productList, setId}) => {

    return(
        <table className="product-list">
           <thead className="product-list-head">
               <tr className="product-list-head-row">
                   <th>Id</th>
                   <th>Producto</th>
                   <th>Precio</th>
                    <th>Eliminar</th>
               </tr>
           </thead>
           <tbody className="product-list-body">
                {
                    productList.map(chocolate => {
                        return(
                            <Product
                                key={chocolate.id}
                                setId={setId}
                                id={chocolate.id}
                                marca={chocolate.marca}
                                porcentaje={chocolate.porcentaje}
                                leche={chocolate.leche}
                                tipo={chocolate.tipo}
                                extras={chocolate.extras}
                                precio={chocolate.precio}>
                                
                            </Product>
                        )
                    })
                }
            </tbody>
        </table>    
    )
}


export default ProductList;