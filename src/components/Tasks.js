import React, { useState } from "react";

const Tasks = ({task}) => {
    const [isCompleted,setIsCompleted] = useState({completed:task.completed}) 

    /* Modifie la valeur de l'état de "completed" 
      à chaque fois qu'on clique sur le button 'btnCompleted' */

     const toogleCompleted = () => {
        setIsCompleted(prevState => {
            return {
                completed:!prevState.completed
            }
        })
        task.completed = !isCompleted.completed

     } 

     return(
        <li className={"tasks " + (task.completed && 'completedTask')} >
            {task.name}
            <button className="btnCompleted" onClick={() => toogleCompleted()} >&#x2713;</button>
        </li>
    )
     
}

export default Tasks
