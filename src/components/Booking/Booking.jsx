import React, {useState, useEffect} from "react";

const Booking = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        numOfPeople: "",
        datetime: "",
    });
    const [status, setStatus] = useState('');


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

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwrINaJWAPkqdKRQquZZfv7NrI9xtHJRap-n9L_oOuT4SCnlwpmwrFMQk4PVxGzx32ybg/exec';
        setStatus('Đang kiểm tra...');

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
                setStatus('Đang gửi...');
                const postResponse = await fetch(scriptURL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                // Since we can't read the response with no-cors, we'll assume success
                // if the request completes without throwing an error
                setStatus('Gửi thành công!');
                setFormData({name: '', phone: '', numOfPeople: ''});
            } else {
                // Show error message from GET response
                setStatus(checkData.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.');
            }
        } catch (error) {
            setStatus('Gửi thất bại. Vui lòng thử lại sau.');
            console.error('Error:', error);
        }
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
                        name="numOfPeople"
                        placeholder="Số người"
                        value={formData.numOfPeople}
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
            <p>{status}</p>
        </div>
    );
};

export default Booking;
