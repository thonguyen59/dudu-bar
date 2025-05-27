import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import TopList from "./components/Menu/TopList.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Booking from "./components/Booking/Booking.jsx";

const App = () => {
    return (
        <div className={"bg-gray-500 h-screen"}>
            <div className={"font-display overflow-x-hidden bg-gray-500"}>
                <div className={"font-display overflow-x-hidden"}>
                    <Navbar/>
                    <Hero/>
                    <TopList/>
                    <Booking/>
                    <Contact/>
                </div>
            </div>
        </div>
    )
}

export default App;