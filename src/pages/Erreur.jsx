import { Link } from "react-router-dom"
import '../styles/erreur.scss'


function Erreur () {
    return (
        <div className="erreur">
            <h1 className="erreur__number">404</h1>
            <h3 className="erreur__description">Oups! La page que vous demandez n'existe pas.</h3>
            <Link to = '/' className="erreur__link">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Erreur