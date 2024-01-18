
import '../styles/card.scss'



export default function Card ({cover, title}){

    return (
        <div className="card">

            <img className="card__img" src = {cover} alt = {title}/>
            <p className="card__title">{title}</p>

        </div>
    )
}