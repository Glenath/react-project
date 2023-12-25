import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
 const {todoCompleted, todos} = React.useContext(TodoContext)

    return (
    
    <p className='counterContent'>Has completado de <b> {todoCompleted.length} </b>
    de 
    <b> {todos.length} </b>
     TODOS</p>
    );   
  }
  export { TodoCounter };
