import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext=React.createContext()

function TodoProvider({children}) {

  const {item: todos, saveItem:saveTodos, loading, error}=useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue]=React.useState('')
  const [openModal, setOpenModal]=React.useState(false)
  const todoCompleted=todos.filter((todo)=>!!todo.completed)

  const searchedTodo=todos.filter((todo)=>{
    const todoText=todo.text.toLowerCase()
    const searchText=searchValue.toLowerCase()
    return todoText.includes(searchText)})  


const completeTodo=(text)=>{
  const newTodos=[...todos];
  const todoIndex=newTodos.findIndex((todo)=>todo.text===text)
  newTodos[todoIndex].completed=true
  saveTodos(newTodos)
}
const deleteTodo=(index)=>{
  const newTodos=[...todos];
  newTodos.splice(index, 1)
  saveTodos(newTodos)
}
const addTodo=(text)=>{
  const newTodos=[...todos];
  newTodos.push({
    text,
    completed:false
  })
  saveTodos(newTodos)
}

  return (
    <TodoContext.Provider value={{  
      loading,
      error,
      completeTodo,
      deleteTodo,
      searchValue,
      setSearchValue, 
      todoCompleted, 
      todos, 
      searchedTodo,
      openModal,
      addTodo,
      setOpenModal}}>
        {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };

