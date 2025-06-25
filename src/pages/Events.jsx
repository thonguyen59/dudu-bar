import EventCarousel from "../components/EventCarousel"

const Events = ({ setCurrentPage }) => {
  const eventTypes = [
    { id: "happy-hour", label: "Happy Hour", active: true },
    { id: "lady-night", label: "Lady Night" },
    { id: "live-music-1", label: "Live Music" },
    { id: "live-music-2", label: "Live Music" },
  ]

  const eventDetails = {
    venue: "Lulu Saigon",
    address: "1A Phan Ton street, Dakao, District 1, HCMC",
    hours: {
      dinner: "Monday - Sunday - 5 pm - 1 am",
      bar: "Monday - Sunday - 5 pm - 1 am",
    },
    contact: {
      phone: "+ 84 905080962",
      email: "+ info@lulusaigon.com",
    },
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="space-y-2">
              {eventTypes.map((event) => (
                <button
                  key={event.id}
                  className={`w-full text-left px-4 py-3 font-medium transition-colors ${
                    event.active
                      ? "bg-green-800 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-green-800 hover:text-white"
                  }`}
                >
                  {event.label}
                </button>
              ))}
            </div>
          </div>

          {/* Event Content */}
          <div className="md:col-span-3">
            <div className="space-y-8">
              {/* Event Cards */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white border border-gray-200 p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-200 aspect-video flex items-center justify-center">
                      <span className="text-gray-500 text-lg">Photo</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">{eventDetails.venue}</h3>
                      <p className="text-gray-600 mb-4">{eventDetails.address}</p>

                      <div className="mb-4">
                        <p className="font-medium text-gray-800 mb-1">Hours of Operation</p>
                        <p className="text-gray-600 text-sm mb-1">Dinner: {eventDetails.hours.dinner}</p>
                        <p className="text-gray-600 text-sm">Bar: {eventDetails.hours.bar}</p>
                      </div>

                      <div>
                        <p className="font-medium text-gray-800 mb-1">CONTACT</p>
                        <p className="text-gray-600 text-sm">{eventDetails.contact.phone}</p>
                        <p className="text-gray-600 text-sm">{eventDetails.contact.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <EventCarousel />
    </div>
  )
}

export default Events
