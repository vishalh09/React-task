import React, { useState } from 'react';

const BookingForm = ({ showName }) => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('bookingDetails', JSON.stringify({ ...userDetails, showName }));
    alert('Booking confirmed!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow-md">
      <h2 className="text-2xl mb-4">Book a Ticket for {showName}</h2>
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={userDetails.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={userDetails.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
