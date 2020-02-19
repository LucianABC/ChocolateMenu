import React, {useReducer, useState} from 'react';
import Imagen from './Imagen/Imagen'
import Title from '../../components/Title'


const reducer = (state, action)=>{
    switch(action.type){
        case "changeUser":
            return {...state, user: action.payload };
        case "changeName":
            return {...state, name: action.payload};
        case "changeMail":
            return {...state, mail: action.payload};
        default:
            return state;
    }
};
const Params = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [userName, setUsername] = useState("");
    const [state, dispatch] = useReducer(reducer, {user: userName, mail: mail, name: name});
    const changeUser=()=> dispatch({type: "changeUser", payload: userName});
    const changeMail=()=> dispatch({type: "changeMail", payload: mail});
    const changeName=()=> dispatch({type:"changeName", payload: name});

    return(
        <div>
            <Title>Esto es un titulo</Title>
            <div>
                <input type="text" onChange = { e=> setName(e.target.value)}/>
                <button onClick={changeName}>Send name</button>

                <input type="text" onChange = { e=> {setUsername(e.target.value)}}/>
                <button onClick={changeUser}>Send username</button>
                
                <input type="email" onChange = { e=> {setMail(e.target.value)}}/>
                <button onClick={changeMail}> Send mail</button>
            </div>
            
            <span> Hola {state.name}, tu usuario es {state.user} mail es {state.mail}</span>
        
            <Imagen></Imagen>

        </div>       
    );
}

export default Params