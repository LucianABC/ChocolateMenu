import React from 'react';
import './Product.scss';
let tieneLeche;

const Product = (props) => {
    if(props.leche) {
      tieneLeche= "con leche"
      }else {
        tieneLeche = "sin leche"
    }

    return(
        <tr className="product-list-item"> 
          <td className="product-list-item-id">
            {props.id} 
          </td>
          <td className="product-list-item-info">
            <h3>{props.marca} </h3>
            <div>{props.tipo} {tieneLeche}, {props.porcentaje} cacao. {props.extras}</div>
          </td>
          <td className="product-list-item-price">
            ${props.precio}
          </td>
          <td className="product-list-item-delete">
            <i className="fa fa-pencil" onClick={e=>{props.setId(props.id)}}></i>
            <i className="fa fa-trash" aria-hidden="true"></i>

          </td>
        </tr>
    )
};


export default Product;