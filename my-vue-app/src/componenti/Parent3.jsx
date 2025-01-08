// eslint-disable-next-line no-unused-vars
import React from "react";
import Child from "./Child2";

const Parent3 = () =>{
    // eslint-disable-next-line no-undef
    const[user,setUser]=useState({name:'', age:0});

    const hadleUserChange = (userInfo)=>{
        setUser(userInfo);
    };
    return (
        <div>
            <h1> Nome:{user.name}, Età:{user.age}</h1>
            {}
            <Child onUserChange={hadleUserChange}/>
        </div>
    );
};

export default Parent3;

