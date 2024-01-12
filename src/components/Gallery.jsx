import data from '../data/data.json';
import Card from './Card';
import '../styles/gallery.scss';
import { Link } from 'react-router-dom';

//import React, { useEffect, useState } from 'react';

export default function Gallery () {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('../data/data.json');

  //       if (response.ok) {
  //         const dataList = await response.json();
  //         setData(dataList);

  //       } else {
  //         console.error('La requête a échoué avec le statut:', response.status);
  //       }
  //     } catch (error) {
  //       console.error('Erreur lors de la récupération des données:', error);
  //     }
  //   };

  //   fetchData();
  // },[]);

  return (
    <div className="gallery">
        {data && data.map(({ id, cover, title }) => (
          <Link key={id} to={`/Fiche/${id}`}>
            <Card
              key={`card${id}`}
              cover={cover}
              title={title}
            />
            </Link>
        ))}
    </div>
  );
};


