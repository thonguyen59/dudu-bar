"use client"

import EventCarousel from "../components/EventCarousel"
import GoogleMap from "../components/GoogleMap"
import StaticGoogleMap from "../components/StaticGoogleMap.jsx";

const Home = ({ setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">

      <StaticGoogleMap address="Ben Thanh Market, Ho Chi Minh City, Vietnam" apiKey="AIzaSyBm5_-qSCKmnwe9-5gOtQIkGtDXA_B8wsI"/>

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-4">LOGO (text)</h1>
          <p className="text-lg text-gray-600 mb-2">Short intro about Foods & Drinks concepts</p>
          <p className="text-lg text-gray-600 mb-8">Design concept</p>
          <button
            onClick={() => handleNavigation("reservation")}
            className="bg-green-800 text-white px-8 py-3 font-medium hover:bg-green-900 transition-colors"
          >
            RESERVATION
          </button>
        </div>
      </section>

      {/* Savour Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 aspect-video flex items-center justify-center">
              <span className="text-gray-500 text-lg">Photo</span>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
                SAVOUR THE FLAVOUR
                <br />
                OF THE SEASON
                <br />
                (HEADLINE)
              </h2>
              <p className="text-gray-600 mb-8">Short intro about Foods & Drinks</p>
              <button
                onClick={() => handleNavigation("menu")}
                className="bg-green-800 text-white px-8 py-3 font-medium hover:bg-green-900 transition-colors"
              >
                View MENU
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Elevate Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
                ELEVATE YOUR WEEKEND
                <br />
                (HEADLINE)
              </h2>
              <p className="text-gray-600 mb-8">Short intro about events</p>
              <button
                onClick={() => handleNavigation("gallery")}
                className="bg-green-800 text-white px-8 py-3 font-medium hover:bg-green-900 transition-colors"
              >
                View GALLERY
              </button>
            </div>
            <div className="bg-gray-200 aspect-video flex items-center justify-center order-1 md:order-2">
              <span className="text-gray-500 text-lg">Photo</span>
            </div>
          </div>
        </div>
      </section>
      {/* Events Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <EventCarousel setCurrentPage={setCurrentPage} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <GoogleMap />
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

export default Home
