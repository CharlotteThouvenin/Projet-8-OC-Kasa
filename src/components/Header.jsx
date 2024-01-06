import Logo from '../assets/LOGO.svg'
import { Link } from 'react-router-dom'
import '../styles/header.scss'

export default function Header (){
    return (
        <div className='header'>
            <img src={Logo} alt='logo' className='header__logo'/>
            <nav className='header__nav'>
                <Link to="/" className='header__nav__Home'>Accueil</Link>
                <Link to="/APropos" className='header__nav__about'>A Propos</Link>
            </nav>
        </div>
    )
}