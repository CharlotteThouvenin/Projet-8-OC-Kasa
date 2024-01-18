import { useEffect, useState } from 'react';

export default function GetData (){
const [dataList, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/data.json');

        if (response.ok) {
          const dataList = await response.json();
          setData(dataList);
        } else {
          console.error('La requête a échoué avec le statut:', response.status);
          const errorText = await response.text();
          console.error('Contenu de l\'erreur:', errorText);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);
  return (dataList)
  
}


