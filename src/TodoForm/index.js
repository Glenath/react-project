import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';


function TodoForm(){
  const {
    addTodo,
    setOpenModal,
 }=React.useContext(TodoContext)
 const [newTodoValue, setNewValue]=React.useState('')
 const onSubmit=(event)=>{
  event.preventDefault()
  addTodo(newTodoValue)
  setOpenModal(false)


 }
 const onCancel=(event)=>{
  event.preventDefault()
  setOpenModal(false)

 }
 const onChange=(event)=>{
  setNewValue(event.target.value)
 }

    return (
   <form onSubmit={onSubmit}>
    <label for="">Add  new task</label>
    <textarea value={newTodoValue} 
    onChange={onChange}
    placeholder='Ex: Create form'/>
    <div className='TodoForm-container'>
   
    <button 
    type='button'className='TodoForm-buttom TodoForm-buttom--cancel' onClick={onCancel}>Cancel</button>
    <button type='submit'
    className='TodoForm-buttom TodoForm-buttom--add'>Add</button>
    </div>
    
    </form>
    );   
  }

  export { TodoForm };
