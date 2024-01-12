
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json'

const Fiche = () => {
  const { id } = useParams();
  const dataFiche = data.find((fiche) => fiche.id.toString() === id);
console.log(dataFiche)

  return (
    <div>
      <img src= {dataFiche.cover} alt='cover' />
      <h2>Fiche {id}</h2>
    </div>
  );
};

export default Fiche;