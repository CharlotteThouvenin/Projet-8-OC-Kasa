import activeStar from '../assets/active-star.svg';
import inactiveStar from '../assets/inactive-star.svg';
import '../styles/rating.scss'

const Rating = ({ rating }) => {
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      const starImage = i <= rating
        ? activeStar
        : inactiveStar
  
      stars.push(
        <img
          key={i}
          src={starImage}
          alt={`Star ${i}`}
        />
      );
    }
  
    return (
      <div className='stars'>
        {stars}
      </div>
    );
  };
  


export default Rating