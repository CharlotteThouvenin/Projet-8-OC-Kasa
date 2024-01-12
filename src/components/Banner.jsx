
import '../styles/banner.scss'

export default function Banner ({banner, bannerText}){
    return (
        <div className='banner'>
            <img className='banner__img' src = {banner} alt='mer&rocher' />
            <p className='banner__text'>{bannerText}</p>
        </div>
    )
}