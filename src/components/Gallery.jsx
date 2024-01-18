
import Card from './Card';
import '../styles/gallery.scss';
import { Link } from 'react-router-dom';
import GetData from '../utils/GetData';

export default function Gallery() {
  const dataList = GetData ()
  return (
    <div className="gallery">
      {dataList &&
        dataList.map(({ id, cover, title }) => (
          <Link key={id} to={`/Fiche/${id}`}>
            <Card key={`card${id}`} cover={cover} title={title} />
          </Link>
        ))}
    </div>
  );
}