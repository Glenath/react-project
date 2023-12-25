import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButtom.css';


function CreateTodoButtom(){
  const {
    addTodo,
    setOpenModal,
 }=React.useContext(TodoContext)

    return (
    <button className='btn-container' onClick={()=> setOpenModal(state=>!state)} type="">Create tarea</button>
    );   
  }

  export { CreateTodoButtom };
