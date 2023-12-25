import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButtom.css';


function CreateTodoButtom(){
  const {
    setOpenModal,
 }=React.useContext(TodoContext)

    return (
    <button className='btn-container' onClick={()=> setOpenModal(state=>!state)} type="">Create task</button>
    );   
  }

  export { CreateTodoButtom };
