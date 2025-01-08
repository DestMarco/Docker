// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function Child({onMessage}){
    const sendMessageToParent=()=>{
        onMessage('ciao dal componente child');
        
    };
    return(
        <div>
            <button onClick={sendMessageToParent}> invia  messaggio al Parent</button>
        </div>
    );
};

export default Child;