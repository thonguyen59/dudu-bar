import React from "react";
import {NavbarMenu} from "../mockData/data.js";
import {MdMenu} from "react-icons/md"
import reactLogo from "../assets/react.svg";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
            <nav className="navbar navbar-dark bg-amber-200">
                <div className="container flex justify-between items-center py-8">
                    {/*Logo section*/}
                    <div className="text-2xl flex items-center gap-2">
                        <img src={reactLogo} alt="React Logo" className="mr-4" />
                        <p>VU'S BAR</p>
                    </div>

                    {/*Menu section*/}
                    <div className="hidden md:block">
                        <ul className={"flex items-center gap-6 text-gray-600"}>
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
                    <div>
                        <button className={"hover:"}>
                            <img src={reactLogo} alt="React Logo" className="mr-4" />
                        </button>
                    </div>

                    <div className={"md:hidden"} onClick={() => setIsOpen(!isOpen)}>
                        <MdMenu className={"text-4xl"}/>
                    </div>

                    <ResponsiveMenu open={isOpen} onClose={() => setIsOpen(false)}/>
                </div>
            </nav>
    )
}

export default Navbar;