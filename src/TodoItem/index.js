import './TodoItem.css';


function TodoItem({text, completed, onComplete, onDelete}){
    return (
     <li className='item-content'>
      <div className={`item-icon ${completed && 'item--complete'}`} >
      <span className="material-symbols-outlined" onClick={onComplete}>
         done
         </span>
      </div>
      <div className={`item-text ${completed && 'text--complete'}`} >
          <p>{text}</p>
      </div>
       
        <div className='item-icon'>
        <span className="material-symbols-outlined" onClick={onDelete}>
close
</span>
        </div>

     </li>
    );   
  }

  export { TodoItem };
