// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Child2=({onUserChange})=>{
  const updateUser=()=>{
   const newUser={name:'Mario',age:30};
   onUserChange(newUser);

  } ; 
  return(
    <div>
        <button onClick={updateUser}>aggiungi utente</button>
    </div>
  );
};
export default Child2