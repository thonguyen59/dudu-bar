import React, {useState, useEffect} from "react";

const Booking = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        guests: "",
        datetime: "",
    });

    useEffect(() => {
        const now = new Date();
        const offset = now.getTimezoneOffset();
        const localTime = new Date(now.getTime() - offset * 60000);
        const defaultDateTime = localTime.toISOString().slice(0, 16); // format: yyyy-MM-ddThh:mm
        setFormData((prev) => ({...prev, datetime: defaultDateTime}));
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Booking Info:", formData);
        // You can add email or Google Sheets logic here
    };

    return (
        <div id="booking" className={"bg-amber-800/25 py-10"}>
            <section className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Đặt Bàn Ngay</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Tên của bạn"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-wine"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Số điện thoại"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-wine"
                        required
                    />
                    <input
                        type="number"
                        name="guests"
                        placeholder="Số người"
                        value={formData.guests}
                        onChange={handleChange}
                        min="1"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-wine"
                        required
                    />
                    <input
                        type="datetime-local"
                        name="datetime"
                        value={formData.datetime}
                        onChange={handleChange}
                        required
                        className="w-full border px-4 py-2 rounded-md"
                    />
                    <button
                        type="submit"
                        className="w-full bg-wine bg-primary text-white py-2 rounded-md hover:bg-red-700 transition"
                    >
                        Đặt bàn
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Booking;
