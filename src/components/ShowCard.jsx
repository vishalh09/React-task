import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  return (
    <div className="border p-6 rounded-lg shadow-md">
      <img src={show.image?.medium} alt={show.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-2xl font-bold mt-2">{show.name}</h2>
      <p>{show.genres.join(', ')}</p>
      <p>Rating: {show.rating.average || 'N/A'}</p>
      <Link to={`/summary/${show.id}`} className="text-blue-500 mt-2 inline-block">View Summary</Link>
    </div>
  );
};

export default ShowCard;
