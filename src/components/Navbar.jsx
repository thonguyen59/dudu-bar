"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "menu", label: "MENU" },
    { id: "events", label: "EVENTS" },
    { id: "gallery", label: "GALLERY" },
    { id: "contact", label: "CONTACT" },
    { id: "reservation", label: "RESERVATION" },
  ]

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setIsMenuOpen(false)
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleLogoClick = () => {
    setCurrentPage("home")
    setIsMenuOpen(false)
    // Scroll to top when clicking logo
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white shadow-sm border-b border-gray-200 transition-all duration-300 ${
        isScrolled ? "py-1" : "py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? "h-10" : "h-16"}`}
        >
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <div
              className={`transition-all duration-300 ${isScrolled ? "w-8 h-8" : "w-10 h-10"} bg-green-800 rounded-full flex items-center justify-center`}
            >
              <div
                className={`transition-all duration-300 ${isScrolled ? "w-5 h-5" : "w-6 h-6"} bg-white rounded-full opacity-80`}
              ></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1 transition-all duration-300 cursor-pointer ${
                  isScrolled ? "text-xs" : "text-sm"
                } font-medium transition-colors rounded ${
                  currentPage === item.id ? "bg-green-800 text-white" : "text-green-800 hover:text-green-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-green-800 hover:text-green-900">
              {isMenuOpen ? <X size={isScrolled ? 20 : 24} /> : <Menu size={isScrolled ? 20 : 24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors rounded ${
                    currentPage === item.id ? "bg-green-800 text-white" : "text-green-800 hover:text-green-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
