import { ChevronDown } from "lucide-react"
import EventCarousel from "../components/EventCarousel"
import GoogleMap from "../components/GoogleMap"

const Gallery = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-light text-gray-800">COVER PHOTO & TEXT</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div
                key={item}
                className="bg-green-800 aspect-square flex items-center justify-center hover:bg-green-900 transition-colors cursor-pointer"
              >
                <span className="text-white text-lg">Photo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="flex justify-center py-8">
        <ChevronDown size={32} className="text-gray-400" />
      </div>

      {/* Events Section */}
      <EventCarousel />

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="aspect-video">
              <GoogleMap />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Lulu Saigon</h3>
              <p className="text-gray-600 mb-4">
                1A Phan Ton street, Dakao,
                <br />
                District 1, HCMC
              </p>
              <div className="mb-4">
                <p className="font-medium text-gray-800 mb-1">Hours of Operation</p>
                <p className="text-gray-600 text-sm">
                  Dinner: Monday - Sunday - 5 pm - 1 am
                  <br />
                  Bar: Monday - Sunday - 5 pm - 1 am
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-800 mb-1">CONTACT</p>
                <p className="text-gray-600 text-sm">+ 84 905080962</p>
                <p className="text-gray-600 text-sm">+ info@lulusaigon.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
