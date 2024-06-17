import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowSummary from '../components/ShowSummary';

const Summary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data));
  }, [id]);

  return (
    <div className="p-4">
      {show ? <ShowSummary show={show} /> : <p>Loading...</p>}
    </div>
  );
};

export default Summary;

