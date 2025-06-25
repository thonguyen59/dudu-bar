import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Events from "./pages/Events"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Reservation from "./pages/Reservation"

function App() {
    const [currentPage, setCurrentPage] = useState("home")

    const renderPage = () => {
        switch (currentPage) {
            case "home":
                return <Home setCurrentPage={setCurrentPage} />
            case "menu":
                return <Menu setCurrentPage={setCurrentPage} />
            case "events":
                return <Events setCurrentPage={setCurrentPage} />
            case "gallery":
                return <Gallery setCurrentPage={setCurrentPage} />
            case "contact":
                return <Contact setCurrentPage={setCurrentPage} />
            case "reservation":
                return <Reservation setCurrentPage={setCurrentPage} />
            default:
                return <Home setCurrentPage={setCurrentPage} />
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className="flex-grow pt-20">{renderPage()}</main>
            <Footer setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default App
