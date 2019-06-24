import React from 'react';

function TodoLi (props) {
   return (
    <li className="">
    <div className="view">
      <input 
            className="toggle" 
            onClick = {props.toggleComplete} 
            type="checkbox" />
      <label>{props.todo.text}</label>
      <button className="destroy" onClick = {props.onDelete}></button>
    </div>
  </li>
   ) 
}

export default TodoLi;