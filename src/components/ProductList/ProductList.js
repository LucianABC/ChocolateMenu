import React from 'react';
import './ProductList.scss';
import Product from '../Product/Product';

let list = [
    {
        id: 1,
        marca: "Dolca",
        tipo: "en rama",
        porcentaje: "50%",
        leche: false,
        extras: [],
        precio: 180
    },
    {   
        id: 2,
        marca: "Felfort",
        tipo: "aireado",
        porcentaje: "10%",
        leche: true,
        extras: ["almendras"],
        precio: 150
    },
];

const ProductList = ({product}) => {

    //product.id=list.length;
    //list.push(product);
    
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
                    list.map(chocolate => {
                        return(
                            <Product
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