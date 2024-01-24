import React from 'react'
import Tasks from './Tasks'
// Récupère seulement les tâches qui sont complétées contenus dans les propriétés tasks.
const Completed = ({tasks}) => { 
  let  filterTask = tasks.filter(task => task.completed)

    return ( 
    <div className='toDo'>
        <header>
           <h1>Les tâches effectuées</h1> 
        </header>
        <ul className="listTask">
            {  
                filterTask.map((task,id) => <Tasks task={task} key={id} />) 
            }
        </ul>
    </div>
    
    )
}

export default Completed