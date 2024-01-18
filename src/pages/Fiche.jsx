
import React from 'react';
import { useParams, } from 'react-router-dom';
import data from '../assets/data.json'
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import '../styles/fiche.scss'



const Fiche = () => {
  const { id } = useParams();

  const dataFiche = data.find((fiche) => fiche.id.toString() === id);
console.log(dataFiche.pictures)

  return (
    <div className='fiche'>

      <Carousel images = {dataFiche.pictures}/>

      <div className='fiche__content'>

        <div className='fiche__content__title'>
          <h2>{dataFiche.title}</h2>
          <p>{dataFiche.location}</p>
          <div className='fiche__content__title__tags'>
            {dataFiche.tags.map((tag, index) => (
              <div key={index}>{tag}</div>
          ))}
          </div>
        </div>

        <div className='fiche__content__host'>
              <div className='fiche__content__host__name'>{dataFiche.host.name}</div>
              <img className='fiche__content__host__picture' src={dataFiche.host.picture} alt={dataFiche.host.name} />

        </div>
      </div>  
      <div>
        <div className='fiche__content__equipement'>
          <Collapse 
            title = 'Description'
            content = {dataFiche.description}
            size = 'medium'
          />
          <Collapse
            title = 'Équipements'
            content = {
              dataFiche.equipments.map((equipement, index) => (
                <ul>
                  <li key = {index}>{equipement}</li>
                </ul>
              ))
            }
            size = 'medium'
          />
        </div>


      </div>
      
    </div>
  );
};

export default Fiche;