import React from "react";
import { NavLink } from "react-router-dom";

//Une composant qui affiche la barre de navigation en bas de la page
const NavBar = ({onDeleteCompleted}) => (
    <footer>
        <ul className="actions" >
            <li><NavLink to="/" className="linkAction">Liste</NavLink></li>
            <li><NavLink to="/completed"  className="linkAction">Efféctuée</NavLink></li> 
            <li><NavLink to="/add-task" className="linkAction">Ajouter</NavLink></li> 
            <button className="btnRemoveCompleted" onClick={onDeleteCompleted}>Supprimer</button>
        </ul>
    </footer>
)

export default NavBar