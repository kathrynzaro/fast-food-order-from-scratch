import React from 'react';
import CustomDropdown from './CustomDropdown';

export default function MyDropdowns({ setDrinkId, setFoodId, setSideId }) {
  return (
    <div>
      <CustomDropdown
        label='Food?'
        setItem={setFoodId}
        options={[
          { value: '1', displayText: 'Cosmic Pizza' },
          { value: '2', displayText: 'Cosmic Burger' },
          { value: '3', displayText: 'Cosmic Hotdog' },
        ]} />
      <CustomDropdown
        label='Drink?'
        setItem={setDrinkId}
        options={[
          { value: '1', displayText: 'Cosmic Coffee' },
          { value: '2', displayText: 'Cosmic Soda' },
          { value: '3', displayText: 'Cosmic Cocktail' },
        ]} />
      <CustomDropdown
        label='Side?'
        setItem={setSideId}
        options={[
          { value: '1', displayText: 'Cosmic Fries' },
          { value: '2', displayText: 'Cosmic Ice Cream' },
          { value: '3', displayText: 'Cosmic Popcorn' },
        ]} />

    </div>
  );
}
