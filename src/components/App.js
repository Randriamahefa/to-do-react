import React from 'react'
import ToDoList from './ToDoList'
import NavBar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddTask from './AddTask'
import initialData from '../initialData'
import Completed from './Completed'
class App extends React.Component {
    /* tasks est un tableau qui contient la tâche initial
       On va passer tasks comme propriété du composant "ToDoList" et "Completed" 
    */
    state = { 
        tasks:initialData 
    }

    /* Crée une nouvelle tâche
       On passe cette fonction en tant que propriété du composant "AddTask"
       qui va prendre en paramètre le nouveau nom de la tâche */

     onAddTask = (newTaskName) => {
        let newTask = {
          id:Math.random(),
          name:newTaskName,
          Completed:false
        }

      //Change le state initial en ajoutant le nouveau tâche
      this.setState(prevState => ({
        tasks:[...prevState.tasks,newTask]
        
      }))

    }
    
    /* Supprime les tâches complétées 
     modifier la liste des tâches, retenir seulement les tâches non completées */

    onDeleteCompleted = () => {
      this.setState(prevState => {
        let newState = prevState.tasks.filter(task => !task.completed)
        return{
          tasks:newState
        }
      })
    }

    
    /* La methode "render()" nous permet ensuite d'afficher tous ces composants à l'écran */
    render(){
      return(
        <section id="toDo">

            <BrowserRouter>
                <Routes>
                   <Route path='/' Component={(props) => <ToDoList {...props}  tasks={this.state.tasks}  />} />
                   <Route path='completed' Component={(props) => <Completed {...props}  tasks={this.state.tasks}  />} />
                   <Route path='/add-task' Component={(props) => <AddTask {...props} onAddTask={this.onAddTask} />} /> 
                </Routes>
                <NavBar onDeleteCompleted={this.onDeleteCompleted} />
            </BrowserRouter>
          
        </section>
      )
    }
}

export default App