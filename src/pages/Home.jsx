import React, { useState, useEffect } from 'react';
import ShowCard from '../components/ShowCard';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data.map(item => item.show)));
  }, []);

  return (
    <>
    <h1 className='text-center py-5 text-amber-600 font-bold text-4xl font-sans'>Trending Shows</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
       
      {shows.map(show => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
    </>
  );
};

export default Home;
