
import Card from './Card';
import '../styles/gallery.scss';
import { Link } from 'react-router-dom';
import data from '../assets/data.json'

export default function Gallery() {

  return (
    <div className="gallery">
      {data &&
        data.map(({ id, cover, title }) => (
          <Link key={id} to={`/Fiche/${id}`}>
            <Card key={`card${id}`} cover={cover} title={title} />
          </Link>
        ))}
    </div>
  );
}