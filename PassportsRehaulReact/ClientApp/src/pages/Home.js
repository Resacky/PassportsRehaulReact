import OtherPageLinks from "../components/OtherPageLinks";

import '../styles/HomeStyle.css';

function Home() {
    return (
        <>
            <div className="HomeContainer">
                <OtherPageLinks Links="HomeLinks" ul="HomeUl" li="HomeLi"/>
            </div>
        </>
    );
}

export default Home;