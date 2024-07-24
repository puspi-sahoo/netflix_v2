import React from 'react';

const SeriesCard = ({ series }) => {
  return (
    <div className="series-card">
      <img src={series.image} alt={`${series.title} Poster`} />
      <h2>{series.title}</h2>
      <p>{series.description}</p>
    </div>
  );
};

export default SeriesCard;


