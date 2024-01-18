import Logo from '../assets/LOGO.svg'
import { Link } from 'react-router-dom'
import '../styles/header.scss'
import { useLocation } from 'react-router-dom'


export default function Header() {
    const location = useLocation();
    
    // Fonction pour déterminer si la classe "underline" doit être ajoutée
    const isHomeActive = location.pathname === '/';
    const isAboutActive = location.pathname === '/APropos';

    return (
        <div className='header'>
            <img src={Logo} alt='logo' className='header__logo'/>
            <nav className='header__nav'>
                <Link to="/" className={`header__nav__home ${isHomeActive ? 'underline' : ''}`}>Accueil</Link>
                <Link to="/APropos" className={`header__nav__about ${isAboutActive ? 'underline' : ''}`}>A Propos</Link>
            </nav>
        </div>
    );
}