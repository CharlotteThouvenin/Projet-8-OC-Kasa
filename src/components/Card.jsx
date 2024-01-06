import { Link } from "react-router-dom"


export default function Card ({cover, title}){
    return (
        <div className="card">
            <Link to = "/FichesLogement">
            <img className="card__img" src = {cover} alt = {title}/>
            <p className="card__title">{title}</p>
            </Link>
        </div>
    )
}