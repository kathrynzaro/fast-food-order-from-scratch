import React from 'react';

export default function OrderImages({ foodId }) {
  return (
    <div className='order-images'>
      <img src={`food-${foodId}.png`} />
    </div>
  );
}
