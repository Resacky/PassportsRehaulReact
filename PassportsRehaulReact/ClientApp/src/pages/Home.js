import Banner from '../components/Banner';
import OtherPageLinks from "../components/OtherPageLinks";

import '../styles/HomeStyle.css';

function Home() {
    return (
        <>
            <Banner />
            <div className="HomeContainer">
                <OtherPageLinks Links="HomeLinks" ul="HomeUl" li="HomeLi" LinkStyle="primary" />
            </div>
        </>
    );
}

export default Home;