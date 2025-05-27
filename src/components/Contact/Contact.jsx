import React from 'react';

import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import bgImage from "../../assets/cocktail-bars-in-hanoi-05.jpg";


const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

const Contact = () => {
    return (
        <section className="bg-gray-400 text-white py-12 px-4" id="contact"  style={bgStyle}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h2>
                <p className="mb-6 text-softWhite">
                    Đặt bàn hoặc liên hệ trực tiếp với chúng tôi qua các kênh mạng xã hội.
                </p>

                <div className="flex justify-center gap-6 text-2xl">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-wine transition duration-300"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-wine transition duration-300"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://zalo.me/0325585493"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-wine transition duration-300"
                    >
                        <SiZalo />
                    </a>
                </div>

                <p className="mt-8 text-sm text-gray-200">© 2025 DUDU. All rights reserved.</p>
            </div>
        </section>
    );
};

export default Contact;