import bannerImage from "../assets/bannerApropos.png";

import Banner from "../components/Banner";

export default function APropos (){
    return (
        <div>
          <Banner
            banner={bannerImage}
            />
        </div>
      );
}