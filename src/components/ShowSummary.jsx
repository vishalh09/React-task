import React, { useState } from 'react';
import BookingForm from './BookingForm';

const ShowSummary = ({ show }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{show.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Close Booking Form' : 'Book Ticket'}
      </button>
      {showForm && <BookingForm showName={show.name} />}
    </div>
  );
};

export default ShowSummary;

