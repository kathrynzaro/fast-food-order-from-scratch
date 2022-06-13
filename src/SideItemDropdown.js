import React from 'react';

export default function SideItemDropdown({ setSideId }) {
  function handleChange(e) {
    setSideId(e.target.value);
  }
  
  return (
    <select onChange={handleChange}>
      <option value="1">Fries</option>  
      <option value="2">Ice Cream</option>  
      <option value="3">Popcorn</option>  
    </select>
  );
}
