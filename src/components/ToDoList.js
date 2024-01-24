import React from 'react'
import Tasks from './Tasks'


/* Ce composant ToDoList permet d'afficher la liste des tâches à partir d'une composant "Tasks". */
   
const ToDoList = ({tasks}) => { 
    return ( 
    <div className='toDo'>
        <header>
           <h1>Liste de tâches</h1> 
        </header>
        <ul className='listTask'>
            { 
                tasks.map((task,id) => <Tasks task={task} key={id} /> ) 
            }
        </ul>
    </div>
    
    )
}

export default ToDoList