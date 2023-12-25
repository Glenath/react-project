import React from 'react';
import { TodoProvider } from '../TodoContext';



import './App.css';
import { AppUi } from './AppUI';




// const defaultTodos=[
//   {text:'Cortar cebolla', completed:true},
//   {text:'Pedir rappi', completed:false},
//   {text:'Terminar curso', completed:false},
//   {text:'instalar programa', completed:false}
// ]


function App() {




 return ( <TodoProvider>
 <AppUi />
 </TodoProvider>

 )
}

export default App;
