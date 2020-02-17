import React, { useState, useEffect } from 'react';
import './Actions.scss';

const Actions = ({setProduct, prodToEdit}) => {
    const [newmarca, setMarca] = useState("");
    const [newtipo, setTipo] = useState("");
    const [newporcentaje, setPorcentaje] = useState();
    const [newleche, setLeche] = useState();
    const [newextras, setExtras] = useState("");
    const [newprecio, setPrecio] = useState();

    const handleInputs = (marca="", tipo="", porcentaje=0, leche=true, extras="", precio=0) =>{
        setMarca(marca);
        setTipo(tipo);         
        setPorcentaje(porcentaje);
        setLeche(leche);
        setExtras(extras);
        setPrecio(precio);
    }
    const handleClick = event=>{
        let product = {
            marca: newmarca,
            tipo: newtipo,
            porcentaje: newporcentaje,
            leche: newleche,
            extras: newextras,
            precio: newprecio
        }
        if (prodToEdit !==undefined) {
            product.id=prodToEdit.id;
        }
        setProduct(product);   
        handleInputs(); 
    };
    
    useEffect(() => {
        if (prodToEdit !== undefined) {
            handleInputs(prodToEdit.marca,prodToEdit.tipo,
                prodToEdit.porcentaje,prodToEdit.leche,
                prodToEdit.extras, prodToEdit.precio)
        }
    },[prodToEdit]);

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