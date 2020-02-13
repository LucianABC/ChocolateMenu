import React, { useState, useEffect } from 'react';
import './Actions.scss';

const Actions = ({setProduct, prodToEdit}) => {
    const [newmarca, setMarca] = useState("");
    const [newtipo, setTipo] = useState("");
    const [newporcentaje, setPorcentaje] = useState();
    const [newleche, setLeche] = useState();
    const [newextras, setExtras] = useState("");
    const [newprecio, setPrecio] = useState();

    useEffect(() => {
        if (prodToEdit !== undefined) {
            setMarca(prodToEdit.marca);
            setTipo(prodToEdit.tipo);         
            setPorcentaje(prodToEdit.porcentaje);
            setLeche(prodToEdit.leche);
            setExtras(prodToEdit.extras);
            setPrecio(prodToEdit.precio);
        }
    },[prodToEdit])
    const handleClick = event=>{
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
                        <input type="text" className="marca-input"
                                onChange={e => {setMarca(e.target.value)}}
                                value={newmarca} ></input>  
                    </label>
                    <label className="precio-label">
                        Precio
                        <input type="number" className="price-input"
                                onChange={e => {setPrecio(e.target.value)}} 
                                value={newprecio} ></input>
                    </label>
                </div>
                <div>    
                    <label className="extras-label"> 
                        Extras (separados con comas)
                        <input type="text" className="extras-input"
                                onChange={e => {setExtras(e.target.value)}}
                                value={newextras}></input>
                    </label>
                </div>
                <div>
                <label className="tipo-label">
                        Tipo de chocolate
                        <input type="text" className="tipo-input"
                                onChange={e => {setTipo(e.target.value)}}
                                value={newtipo}></input>
                    </label>
                    <label className="porcentaje-label">
                        Cacao %
                        <input type="number" className="porc-input"
                                onChange={e => {setPorcentaje(e.target.value)}} 
                                value={newporcentaje}></input>
                    </label>
                    <label className="leche-label">
                        Leche
                        <select type="text" onChange={e => {setLeche(e.target.value)}} className="leche-input" value={newleche}>
                            <option value="false">No</option>
                            <option value="true">Si</option>
                        </select>
                    </label>
                </div>
           </div>
            <button type="button" className="add-button" onClick={handleClick}>Add</button>
        </form>
    )
}

export default Actions