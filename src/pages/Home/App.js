import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import banner from '../../assets/banner.png'
function App() {
  return (
    <div>
      <Header />
      <Banner
        banner={banner}/>
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
