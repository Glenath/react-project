import React from 'react';
import { CreateTodoButtom } from '../CreateTodoButtom';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoForm } from '../TodoForm';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';






function AppUi(){
  const {
    loading,
    error,
    completeTodo,
    deleteTodo,
    searchedTodo,
    openModal, 
   
 }=React.useContext(TodoContext)
   return (
    <>
     <div className='main-container'>  
    <TodoCounter/>
    <TodoSearch />
    <TodoList>
              {loading && <TodosLoading/>}
            {error && <TodosError/>}
              { (!loading && searchedTodo.length===0) && <EmptyTodos/>}
              {searchedTodo.map((todo, index)=>(
              <TodoItem key={index} text={todo.text}
                completed={todo.completed} 
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(index)}
                />))}
                
    </TodoList> 
   
     <CreateTodoButtom/>
     {openModal && (
          <Modal>
          <TodoForm/>
        </Modal>
      )}
   
     </div>
   
    
    </>
     
   );   
}
export { AppUi };
 
