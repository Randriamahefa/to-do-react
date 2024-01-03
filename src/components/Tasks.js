import React from "react";

class Tasks extends React.Component {
    state = {
        completed : this.props.task.completed // qui va retourner true ou false
    }

    /* Modifie la valeur de l'état de "completed" 
      à chaque fois qu'on clique sur le button 'btnCompleted' */
    toogleCompleted = () => { 

        this.setState(prevState => ({
            completed: !prevState.completed
        }))
        this.props.task.completed = !this.state.completed
    }
    /* Affiche les tâches une à une */ 
    render() {
        return(
            <li className={"tasks " + (this.state.completed? 'completedTask': null)} >
                {this.props.task.name}
                <button className="btnCompleted" onClick={() => this.toogleCompleted()} >&#x2713;</button>
            </li>
        )
    }
}

export default Tasks
