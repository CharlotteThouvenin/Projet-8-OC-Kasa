
import Card from './Card';
import dataList from '../data/data.json'
import '../styles/gallery.scss'

function Gallery() {

    const firstSixCards = dataList.slice(0,6);

  return (
    <div className="gallery">
        {firstSixCards.map(({id, cover, title}) => (
            <Card
                key={id}
                cover={cover}
                title={title}
            />
        ))}
    </div>
  );
}

export default Gallery;
