import Banner from '../components/Banner';

import '../styles/HomeStyle.css';

function Home() {
    return (
        <div className="main">
            <Banner
                header="homeHeader" headerContent="homeHeaderContent"
                cityLogo="homeCityLogo" PassportText="homePassportText"
            />
        </div>
    );
}

export default Home;