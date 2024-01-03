import React from 'react'
import Tasks from './Tasks'
// Récupère seulement les tâches qui sont complétées contenus dans les propriétés tasks.
const Completed = ({tasks}) => { 
  let  filterTask = tasks.filter(task => task.completed)

    return ( 
    <div className='toDo'>
        <header>
           <h1>Liste de tâches</h1> 
        </header>
        <ul className="listTask">
            {  
                filterTask.map((task) => <Tasks task={task} key={task.id} />) 
            }
        </ul>
    </div>
    
    )
}

export default Completed