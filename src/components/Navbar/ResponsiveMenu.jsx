import React from "react";
import {motion, AnimatePresence} from "framer-motion"
import {NavbarMenu} from "../../mockData/data.js";

const ResponsiveMenu = ({open}) => {
    return (
        <AnimatePresence mode={"wait"}>
            {open && (
                <motion.div initial={{ opacity: 0, y: -100}}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className={"absolute top-20 left-0 w-full h-screen z-20"}
                >
                    <div className={"text-xl font-semibold uppercase bg-navbar text-gray-600 py-10 m-6 rounded-3xl"}>
                        <ul className={"flex flex-col justify-center items-center gap-10"}>
                            {NavbarMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a className="nav-link" href={item.link}>{item.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ResponsiveMenu;