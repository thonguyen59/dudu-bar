"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import axios from "axios";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    date: "02/08/2025",
    time: "18:30",
    guests: "02",
    name: "Rose",
    phone: "0209399578",
    email: "egmail.com",
  })



  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/GAS-key/exec';

    try {
        // First, check with GET request
        const checkResponse = await fetch(scriptURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        // Handle the response
        const checkData = await checkResponse.json();
        console.log(checkData);
      if (checkData.code === '200') {
        // If check passes, proceed with POST request
        // const postResponse = await fetch(scriptURL, {
        await fetch(scriptURL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        // Since we can't read the response with no-cors, we'll assume success
        // if the request completes without throwing an error
        setFormData({date: '', time: '', guests: '', name: '', phone: '', email: ''});
      } else {
        // Show error message from GET response
      }
    } catch (error) {
      console.error('Error:', error);
    }

    const messageText = `🎉 Có khách đặt bàn!\n
📅 Ngày giờ: ${formData.date} - ${formData.time}
👤 Tên: ${formData.name}
📱 SĐT: ${formData.name}
👥 Số khách: ${formData.guests}`;

    try {
      const response = await axios.post(
          'https://graph.facebook.com/v19.0/me/messages?access_token=fb-key',
          {
            recipient: { id: 'user-id-key' },
            message: { text: messageText }
          },
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
      );
      return response.data;
    } catch (error) {
      console.error('Error sending Facebook message:', error);
      throw error;
    }

  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-light text-center text-gray-800 mb-8">RESERVATION INQUIRY</h2>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-8">
        <div className="space-y-6">
          {/* Reservation Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <label className="text-gray-700 font-medium">Reservation date</label>
            <div className="relative">
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-800"
                required
              />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <label className="text-gray-700 font-medium">Time</label>
            <div className="relative">
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-800"
                required
              />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Number of Guests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <label className="text-gray-700 font-medium">Number of guests</label>
            <div className="relative">
              <input
                type="text"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-800"
                required
              />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Reservation Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <label className="text-gray-700 font-medium">Reservation name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-800"
              required
            />
          </div>

          {/* Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <label className="text-gray-700 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-800"
              required
            />
          </div>

          {/* Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-800"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-green-800 text-white px-12 py-3 font-medium hover:bg-green-900 transition-colors"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  )
}

export default ReservationForm
