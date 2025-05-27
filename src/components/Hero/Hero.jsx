import React from 'react';
import bgImage from '../../assets/cocktail-bars-in-hanoi-banner-1.jpg';

const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

const Hero = () => {
    return (
        <section id="home"
            className="relative h-170 flex items-center justify-center "
            style={bgStyle}
        >
            <div className="relative text-center text-primary">
                <h1 className="text-4xl md:text-6xl mb-4 font-bold">WELCOME TO DUDU</h1>
                <p className="text-lg md:text-xl mb-6 ">
                    For existing projects, we've published a comprehensive upgrade guide and built an automated upgrade.
                </p>
                <a
                    href="#booking"
                    className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
                >
                    Đặt bàn ngay
                </a>
            </div>
        </section>
    );
};

export default Hero;