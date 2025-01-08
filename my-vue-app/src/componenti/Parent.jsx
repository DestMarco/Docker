// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Child from "./Child";

function Parent(){
    const [message, setMessage]=useState('');
    const handleMessage=(childMessage) =>{
        setMessage(childMessage);
    };

    return (
        <div>
            <h1>messaggio dal child :{message} </h1>
            <Child onMessage={handleMessage}/>

        </div>
    );
};

export default Parent;