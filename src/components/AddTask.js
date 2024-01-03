import React from 'react'

/* Une composant qui affiche la page pour ajouter une nouvelle tâche */
class AddTask extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddTask(this.newTask.value)
        
    } 
   /* Récuperer les données dans le champ input :
    "ref" va créer une nouvelle variable (à l'intérieur de mon composant) "this.newTask" 
    qui va faire référence au (contenir le) champs input */
    render() {
        return( 
            <section>
                <header>
                    <h1>Nouvelle tâche</h1> 
                </header>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label form="taskName">Nom de la tâche : </label>
                    <input type="text" name="taskName" id="taskName" placeholder='nouvelle tâche' required ref={input => this.newTask = input} />
                    <button type="submit" className="btnAddTask">Créer</button>
                </form>
            </section>
        )
    }
}

export default AddTask