"use client"

import { Facebook, Instagram } from "lucide-react"

const Footer = ({ setCurrentPage }) => {
  const navItems = [
    { id: "menu", label: "MENU" },
    { id: "events", label: "EVENTS" },
    { id: "gallery", label: "GALLERY" },
    { id: "reservation", label: "RESERVATION" },
  ]

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center mr-3">
              <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
            </div>
            <span className="text-lg font-medium text-green-800">Lulu</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className="text-sm text-green-800 hover:text-green-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-green-800 hover:text-green-900 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-green-800 hover:text-green-900 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-green-800">
          <span>Copy rights</span>
          <span>Terms</span>
          <span>Privacy</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
