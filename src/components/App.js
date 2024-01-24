import React, { useState } from 'react'
import ToDoList from './ToDoList'
import NavBar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddTask from './AddTask'
import initialData from '../initialData'
import Completed from './Completed'

const App = () => {
  const [state,setState] = useState({tasks:initialData})

  const onAddTask = (newTaskName) => {
    let newTask = {
      name:newTaskName,
      Completed:false
    }

    setState(prevState => {
      return {
          tasks:[...prevState.tasks,newTask]
      }  
    })

}

   const onDeleteCompleted = () => {

    setState(prevState => {
      return {
        tasks:prevState.tasks.filter(task => !task.completed)
      }
    })

    }

    
    /* La methode "render()" nous permet ensuite d'afficher tous ces composants à l'écran */
    
      return(
        <section id="toDo">

            <BrowserRouter>
                <Routes>
                   <Route path='/' element={<ToDoList tasks={state.tasks}  />} />
                   <Route path='completed' element={<Completed tasks={state.tasks}  />} />
                   <Route path='add-task' element={<AddTask onAddTask={onAddTask} />} /> 
                </Routes>
                <NavBar onDeleteCompleted={onDeleteCompleted} />
            </BrowserRouter>
          
        </section>
      )
    
}

export default App