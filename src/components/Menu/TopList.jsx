import React from 'react';
import wineglass from '../../assets/wine-glass.png';
import bgImage from "../../assets/cocktail-bars-in-hanoi-05.jpg";

const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

const TopList = () => {
    return (
        <div id="menu" className={"text-center text-gray-200" } style={bgStyle}>
            <div className={"backdrop-blur-sm"}>
                <h1 className={"text-4xl font-bold pt-8"}>Top list</h1>
                <p>Our toplist</p>
                {/* Card section*/}
                <div className={"grid grid-cols-2 gap-y-20 md:grid-cols-4 gap-4 text-xl justify-center items-center py-8"}>
                    <div className={"flex flex-col items-center"}>
                        <img className={"items-center h-50"} src={wineglass} alt=""/>
                        <p>200,000</p>
                        <p>card name</p>
                    </div>
                    <div>
                        <img className={"items-center h-50 mx-auto"} src={wineglass} alt=""/>
                        <p>200,000</p>
                        <p>card name</p>
                    </div>
                    <div>
                        <img className={"items-center h-50 mx-auto"} src={wineglass} alt=""/>
                        <p>200,000</p>
                        <p>card name</p>
                    </div>
                    <div>
                        <img className={"items-center h-50 mx-auto"} src={wineglass} alt=""/>
                        <p>200,000</p>
                        <p>card name</p>
                    </div>
                    <div>
                        <img className={"items-center h-50 mx-auto"} src={wineglass} alt=""/>
                        <p>200,000</p>
                        <p>card name</p>
                    </div>
                    <div>
                        <img className={"items-center h-50 mx-auto"} src={wineglass} alt=""/>
                        <p>200,000</p>
                        <p>card name</p>
                    </div>
                    <div>
                        <img className={"items-center h-50 mx-auto"} src={wineglass} alt=""/>
                        <p>200,000</p>
                        <p>card name</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TopList;