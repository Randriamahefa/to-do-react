import React from 'react'
import Tasks from './Tasks'


/* Ce composant ToDoList permet d'afficher la liste des tâches à partir d'une composant "Tasks".

   On récupére la propriétés "tasks" (un tableau avec quatre objets).
   à l'aide de map, je peut executer une fonction pour chaque éléments qui se trouve dans le tableau 
   Et cette fonction va m'envoyer le composant "Tasks"
   */
   
const ToDoList = ({tasks}) => { 
    return ( 
    <div className='toDo'>
        <header>
           <h1>Liste de tâches</h1> 
        </header>
        <ul className='listTask'>
            { 
                tasks.map((task) => <Tasks task={task} key={task.id} /> ) 
            }
        </ul>
    </div>
    
    )
}

export default ToDoList