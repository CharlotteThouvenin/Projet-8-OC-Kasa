
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import banner from '../assets/banner.png'

function Home () {
  return (
    <div>
      <Banner
        banner={banner}
        bannerText = 'Chez vous, partout et ailleurs'
        />
      <Gallery />
    </div>
  );
}

export default Home;
