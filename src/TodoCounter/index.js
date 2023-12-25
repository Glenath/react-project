import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
 const {todoCompleted, todos} = React.useContext(TodoContext)

    return (
    
    <p className='counterContent'>You have completed <b> {todoCompleted.length} </b>
   out of
    <b> {todos.length} </b>
     TODOS</p>
    );   
  }
  export { TodoCounter };
