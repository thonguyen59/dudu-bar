"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const EventCarousel = ({ setCurrentPage }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const events = [
    { id: 1, date: "FEB 15", description: "Happy Hour Special" },
    { id: 2, date: "FEB 20", description: "Live Jazz Night" },
    { id: 3, date: "FEB 25", description: "Cocktail Masterclass" },
    { id: 4, date: "MAR 01", description: "Wine Tasting Event" },
    { id: 5, date: "MAR 05", description: "DJ Night" },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1))
  }

  const handleEventClick = () => {
    if (setCurrentPage) {
      setCurrentPage("events")
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleViewAllEvents = () => {
    if (setCurrentPage) {
      setCurrentPage("events")
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-light text-center text-gray-800 mb-12">EVENTS</h2>
        <div className="relative overflow-hidden">
          {/* Mobile: Single event view */}
          <div className="block md:hidden">
            <div className="w-full max-w-sm mx-auto">
              <div
                className="bg-green-800 aspect-square flex items-center justify-center mb-4 hover:bg-green-900 transition-colors cursor-pointer"
                onClick={handleEventClick}
              >
                <span className="text-white text-lg">Photo</span>
              </div>
              <div className="text-center">
                <p className="font-medium text-gray-800 mb-1">{events[currentIndex].date}</p>
                <p className="text-sm text-gray-600">{events[currentIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Desktop: Three events view */}
          <div className="hidden md:block">
            <div className="flex justify-center space-x-6">
              {events.slice(currentIndex, currentIndex + 3).map((event, index) => (
                <div key={event.id} className="flex-shrink-0 w-80">
                  <div
                    className="bg-green-800 aspect-square flex items-center justify-center mb-4 hover:bg-green-900 transition-colors cursor-pointer"
                    onClick={handleEventClick}
                  >
                    <span className="text-white text-lg">Photo</span>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-gray-800 mb-1">{event.date}</p>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          {events.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
                aria-label="Previous events"
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
                aria-label="Next events"
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            </>
          )}

          {/* Mobile dots indicator */}
          <div className="flex justify-center mt-4 space-x-2 md:hidden">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-green-800" : "bg-gray-300"
                }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleViewAllEvents}
            className="bg-green-800 text-white px-8 py-3 font-medium hover:bg-green-900 transition-colors"
          >
            View All Events
          </button>
        </div>
      </div>
    </section>
  )
}

export default EventCarousel
