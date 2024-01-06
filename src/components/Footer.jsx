import logo from '../assets/logowhite.svg'
import '../styles/footer.scss'

export default function Footer(){
    return(
    <div className='footer'>
        <img src={logo} alt='logo' className='footer__logo'/>
        <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
    </div>
    )
    
}