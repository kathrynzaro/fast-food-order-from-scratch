import React from 'react';

export default function OrderImages({ foodId, sideId }) {
  return (
    <div className='order-images'>
      <img src={`food-${foodId}.png`} />
      <img src={`side-${sideId}.png`} />
    </div>
  );
}
