import Logo from '../assets/LOGO.svg'
import { Link } from 'react-router-dom'

export default function Header (){
    return (
        <div>
            <img src={Logo} alt='logo'/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/APropos">A Propos</Link>
            </nav>
        </div>
    )
}