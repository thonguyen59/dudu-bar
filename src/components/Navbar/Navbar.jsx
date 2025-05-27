import React, { useEffect, useState } from "react";
import {NavbarMenu} from "../../mockData/data.js";
import {MdMenu} from "react-icons/md"
import reactLogo from "../../assets/react.svg";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 bg-navbar text-white shadow-md transition-all duration-300 ${!scrolled ? 'py-3' : ''}`}>
                <div className="container flex justify-between py-5">
                    {/*Logo section*/}
                    <div className="text-2xl flex items-center gap-2 pl-10">
                        <img src={reactLogo} alt="React Logo" className="mr-4" />
                        <p>DUDU</p>
                    </div>

                    {/*Menu section*/}
                    <div className="hidden md:block">
                        <ul className={"flex gap-6 text-2xl font-bold text-gray-600 pr-10"}>
                            {NavbarMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a className="nav-link" href={item.link}>{item.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/*Icon section*/}
                    {/*<div>*/}
                    {/*    <button className={"hover:"}>*/}
                    {/*        <img src={reactLogo} alt="React Logo" className="mr-4" />*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                    <div className={"md:hidden"} onClick={() => setIsOpen(!isOpen)}>
                        <MdMenu className={"text-4xl"}/>
                    </div>

                    <ResponsiveMenu open={isOpen} onClose={() => setIsOpen(false)}/>
                </div>
            </nav>
    )
}

export default Navbar;