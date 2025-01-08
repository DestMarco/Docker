
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

function Todolist(){
    const [todos, setTodos]=useState([]);
    const addTodo=(todo)=>{
      setTodos(prevTodos=>[...prevTodos,todo]);  
    };
    return(
        <div>
            <button onClick={()=> addTodo ("nuovo todo")}>aggiungi todo</button>
            <ul>
                {todos.map((todo, index)=>(
                    <li key ={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};
export default Todolist;