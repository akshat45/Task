import React from 'react';

function Card({ dish }) {
  return (
    <div className="card">
      {/* <img src={dish.imageUrl} alt={dish.name} /> */}
      <h2>{dish.name}</h2>
      <p>{dish.description}</p>
      <p>{dish.price}</p>
    </div>
  );
}

export default Card;
