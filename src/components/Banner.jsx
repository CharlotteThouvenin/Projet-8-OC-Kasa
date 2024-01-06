import banner from '../assets/banner.png';
import '../styles/banner.scss'

export default function Banner (){
    return (
        <div className='banner'>
            <img className='banner__img' src = {banner} alt='mer&rocher' />
            <p className='banner__text'>Chez vous, partout et ailleurs</p>
        </div>
    )
}