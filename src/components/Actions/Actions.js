import React, { useState } from 'react';
import './Actions.scss';

const Actions = ({setProduct}) => {
    const [newmarca, setMarca] = useState("");
    const [newtipo, setTipo] = useState("");
    const [newporcentaje, setPorcentaje] = useState();
    const [newleche, setLeche] = useState("");
    const [newextras, setExtras] = useState("");
    const [newprecio, setPrecio] = useState("");
  
    const handleClick =()=>{
        let newProduct = {
            marca: newmarca,
            tipo: newtipo,
            porcentaje: newporcentaje,
            leche: newleche,
            extras: newextras,
            precio: newprecio
        }
        setProduct(newProduct);
    };
    return (
        <form className="actions">
           <div className="actions-inputs">
                <div>
                    <label className="marca-label">
                        Marca
                        <input type="text" onChange={e => {setMarca(e.target.value)}} className="marca-input"></input>  
                    </label>
                    <label className="precio-label">
                        Precio
                        <input type="text" onChange={e => {setPrecio(e.target.value)}} className="price-input"></input>
                    </label>
                </div>
                <div>    
                    <label className="extras-label"> 
                        Extras (separadas con comas)
                        <input type="text"  onChange={e => {setExtras(e.target.value)}} className="extras-input"></input>
                    </label>
                </div>
                <div>
                <label className="tipo-label">
                        Tipo de chocolate
                        <input type="text" onChange={e => {setTipo(e.target.value)}} className="tipo-input"></input>
                    </label>
                    <label className="porcentaje-label">
                        Cacao %
                        <input type="number" onChange={e => {setPorcentaje(e.target.value)}} className="porc-input"></input>
                    </label>
                    <label className="leche-label">
                        Leche
                        <select type="text" onChange={e => {setLeche(e.target.value)}} className="leche-input">
                            <option value="false">No</option>
                            <option value="true">Si</option>
                        </select>
                    </label>
                </div>
           </div>
            <button type="button" className="add-button" onClick ={handleClick}>Add</button>
        </form>
    )
}

export default Actions