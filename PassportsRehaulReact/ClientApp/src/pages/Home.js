import Banner from '../components/Banner';
import OtherPageLinks from "../components/OtherPageLinks";

import '../styles/HomeStyle.css';

function Home() {
    return (
        <div className="main">
            <Banner
                header="homeHeader" headerContent="homeHeaderContent"
                cityLogo="homeCityLogo" PassportText="homePassportText"
            />
            <div className="HomeContainer">
                <OtherPageLinks Links="HomeLinks" ul="HomeUl" li="HomeLi" LinkStyle="primary" />
            </div>
        </div>
    );
}

export default Home;