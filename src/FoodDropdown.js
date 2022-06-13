import React from 'react';

export default function FoodDropdown({ setFoodId }) {
  function handleChange(e) {
    setFoodId(e.target.value);
  }
  
  return (
    <select onChange={handleChange}>
      <option value="1">Pizza</option>
      <option value="2">Burger</option>
      <option value="3">Hotdog</option>
    </select>
  );
}
