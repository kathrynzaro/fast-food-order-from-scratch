import React from 'react';

export default function OrderImages({ foodId, sideId, drinkId }) {
  return (
    <div className='order-images'>
      <img className='food' src={`food-${foodId}.png`} />
      <img className='side' src={`side-${sideId}.png`} />
      <img className={`drink-${drinkId}`} src={`drink-${drinkId}.png`} />
    </div>
  );
}
