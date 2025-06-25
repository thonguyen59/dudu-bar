import { Camera } from "lucide-react"
import EventCarousel from "../components/EventCarousel"

const Menu = ({ setCurrentPage }) => {
  const menuCategories = [
    { id: "small-bites", label: "Small bites", active: true },
    { id: "a-la-carte", label: "A la carte" },
    { id: "drinks", label: "Drinks" },
    { id: "desserts", label: "Desserts" },
  ]

  const menuItems = {
    salads: [
      {
        name: "Nachos",
        description: "nachos, bacon, jalapenos, red onion, sweetcorn, mozalera",
        hasImage: true,
      },
      {
        name: "Chicken wings",
        description: "chicken, bacon, jalapenos, mozalera",
        hasImage: true,
      },
    ],
    soups: [
      {
        name: "Nachos",
        description: "nachos, bacon, jalapenos, red onion, sweetcorn, mozalera",
        hasImage: true,
      },
    ],
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="space-y-2">
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left px-4 py-3 font-medium transition-colors ${
                    category.active
                      ? "bg-green-800 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-green-800 hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Content */}
          <div className="md:col-span-3">
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-2xl font-medium text-gray-800 mb-6">SMALL BITES</h2>

              {/* Salads Section */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-800 mb-4">SALADS</h3>
                <div className="space-y-4">
                  {menuItems.salads.map((item, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-800">{item.name}</h4>
                          {item.hasImage && <Camera size={16} className="text-gray-400" />}
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* A LA CARTE Section */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-medium text-gray-800 mb-6">A LA CARTE</h2>

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">SALADS</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-800">Nachos</h4>
                          <Camera size={16} className="text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-600">
                          nachos, bacon, jalapenos, red onion, sweetcorn, mozalera
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">SOUPS</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-800">Nachos</h4>
                          <Camera size={16} className="text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-600">
                          nachos, bacon, jalapenos, red onion, sweetcorn, mozalera
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <EventCarousel />
    </div>
  )
}

export default Menu
