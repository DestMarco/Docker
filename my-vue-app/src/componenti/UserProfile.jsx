// eslint-disable-next-line no-unused-vars
import React,{useState} from "react";

function UserProfile(){
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');

    const hanleNameChange=(e)=>{
        setName(e.target.value);
    };


    const hanleEmailChange=(e)=>{
        setEmail(e.target.value);
    };

    return (
        <div>
            <h2>Profilo Utente</h2>
            <label>
                Nome:
                <input type = 'text' value={name} onChange={hanleNameChange}></input>
            </label>
            <br/>
            <label>
                Email:
                <input type = 'text' value={email} onChange={hanleEmailChange}></input>
            </label>
            <h3>Dati inseriti</h3>
            <p>Nome:{name}</p>
            <p>Email:{email}</p>
        </div>
    );

};

export default UserProfile ;