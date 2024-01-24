import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/* Une composant permettant d' ajouter une nouvelle tâche */

const  AddTask = ({onAddTask}) => {
    let navigate = useNavigate()
    const [newTask,setNewTask] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        onAddTask(newTask)
        navigate('/')
        
    }


        return( 
            <section>
                <header>
                    <h1>Nouvelle tâche</h1> 
                </header>
                <form onSubmit={handleSubmit}>
                    <label form="taskName">Nom de la tâche : </label>
                    <input type="text" name="taskName" id="taskName" placeholder='nouvelle tâche' onChange={e => setNewTask(e.target.value)} />
                    <button type="submit" className="btnAddTask" >Créer</button>
                </form>
            </section>
        )
    }


export default AddTask