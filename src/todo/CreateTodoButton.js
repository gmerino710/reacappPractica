import React from 'react';
import './css/todo.css'



function CreateTodoButton(props) {
  const createTodo =(msg)=>{
    alert(msg);
  }
  return (
    <button onClick={()=>createTodo('dasdasdasdadsad')}  className="CreateTodoButton">+</button>
  );
}

export { CreateTodoButton };