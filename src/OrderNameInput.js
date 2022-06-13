import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  function handleChange(e) {
    setOrderName(e.target.value);
  }
  
  return (
    <div className='name-input'>
      Order Name:
      <input onChange={handleChange} />
    </div>
  );
}
