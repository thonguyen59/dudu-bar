"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Clock } from "lucide-react"

const GoogleMap = () => {
  const mapRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  const restaurantInfo = {
    name: "Lulu Saigon",
    address: "1A Phan Ton Street, Dakao, District 1, Ho Chi Minh City",
    phone: "+84 905080962",
    coordinates: { lat: 10.7886, lng: 106.6947 },
  }

  useEffect(() => {
    const loadGoogleMaps = () => {
      // Check if Google Maps is already loaded
      if (window.google && window.google.maps) {
        initializeMap()
        return
      }

      // Create script element
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBm5_-qSCKmnwe9-5gOtQIkGtDXA_B8wsI&libraries=places`
      script.async = true
      script.defer = true

      script.onload = () => {
        initializeMap()
      }

      script.onerror = () => {
        setError(true)
        setIsLoaded(false)
      }

      document.head.appendChild(script)
    }

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return

      try {
        const map = new window.google.maps.Map(mapRef.current, {
          center: restaurantInfo.coordinates,
          zoom: 16,
          styles: [
            {
              featureType: "all",
              elementType: "geometry.fill",
              stylers: [{ color: "#f5f5dc" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#2d5016" }, { lightness: 20 }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }],
            },
            {
              featureType: "poi",
              elementType: "geometry.fill",
              stylers: [{ color: "#e4d5b7" }],
            },
          ],
          disableDefaultUI: false,
          zoomControl: true,
          streetViewControl: false,
          fullscreenControl: true,
        })

        // Add marker
        const marker = new window.google.maps.Marker({
          position: restaurantInfo.coordinates,
          map: map,
          title: restaurantInfo.name,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: "#2d5016",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 3,
          },
        })

        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; font-family: Inter, sans-serif;">
              <h3 style="margin: 0 0 8px 0; color: #2d5016; font-size: 16px; font-weight: 600;">${restaurantInfo.name}</h3>
              <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">${restaurantInfo.address}</p>
              <p style="margin: 0; color: #2d5016; font-size: 14px; font-weight: 500;">${restaurantInfo.phone}</p>
            </div>
          `,
        })

        marker.addListener("click", () => {
          infoWindow.open(map, marker)
        })

        setIsLoaded(true)
        setError(false)
      } catch (err) {
        console.error("Error initializing map:", err)
        setError(true)
        setIsLoaded(false)
      }
    }

    loadGoogleMaps()
  }, [])

  const handleOpenInMaps = () => {
    const query = encodeURIComponent(restaurantInfo.address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank")
  }

  // Fallback component when Google Maps fails to load
  const FallbackMap = () => (
    <div className="w-full h-full relative bg-gradient-to-br from-green-50 to-green-100 rounded-lg overflow-hidden border-2 border-green-200">
      {/* Map-like background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2d5016" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 text-center">
        {/* Location Pin */}
        <div className="mb-4">
          <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center shadow-lg">
            <MapPin size={32} className="text-white" />
          </div>
        </div>

        {/* Restaurant Info */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-green-800">{restaurantInfo.name}</h3>
          <p className="text-gray-700 text-sm leading-relaxed max-w-xs">{restaurantInfo.address}</p>

          <div className="flex items-center justify-center space-x-2 text-green-700">
            <Phone size={16} />
            <span className="text-sm font-medium">{restaurantInfo.phone}</span>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Clock size={16} />
            <span className="text-xs">Daily: 5 PM - 1 AM</span>
          </div>
        </div>

        {/* Open in Maps Button */}
        <button
          onClick={handleOpenInMaps}
          className="mt-6 bg-green-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-900 transition-colors shadow-md"
        >
          Open in Google Maps
        </button>

        {/* Coordinates */}
        <p className="mt-3 text-xs text-gray-500 font-mono">
          {restaurantInfo.coordinates.lat}, {restaurantInfo.coordinates.lng}
        </p>
      </div>

      {/* Corner decoration */}
      <div className="absolute top-2 right-2 w-3 h-3 bg-green-800 rounded-full opacity-20"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-green-600 rounded-full opacity-30"></div>
    </div>
  )

  if (error || !isLoaded) {
    return <FallbackMap />
  }

  return (
    <div className="w-full h-full relative rounded-lg overflow-hidden border-2 border-green-200 shadow-lg">
      <div ref={mapRef} className="w-full h-full min-h-[300px]" />

      {/* Loading overlay */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-green-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-800 mx-auto mb-2"></div>
            <p className="text-green-800 text-sm">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default GoogleMap
