import React from 'react';

// Imported files
import "../../css/Home/Home.css";
import HomeLeftContent from "./HomeLeftContent";
import HomeMiddleContent from "./HomeMiddleContent";
import HomeRightContent from "./HomeRightContent";


const Home = () => {
    return (
        <div className="home">
            <div className="home__leftContent">
                <HomeLeftContent />
            </div>
            <div className="home__middleContent">
                <HomeMiddleContent />
            </div>
            <div className="home__rightContent">
                <HomeRightContent />
            </div>
        </div>
    )
}

export default Home;
