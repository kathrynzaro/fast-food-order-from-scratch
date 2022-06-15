import { useState } from 'react';
import './App.css';
import OrderNameInput from './OrderNameInput';
// import FoodDropdown from './FoodDropdown';
// import SideItemDropdown from './SideItemDropdown';
// import DrinkDropdown from './DrinkDropdown';
import OrderImages from './OrderImages';
import InstructionsForm from './InstructionsForm';
import InstructionsList from './InstructionsList';
import MyDropdowns from './MyDropdowns';


function App() {

  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [orderName, setOrderName] = useState('Kat');
  const [instructions, setInstructions] = useState(['extra cheese', 'add pineapple']);


  return (
    <div className="App">
      <h1>Space Age Diner <img className='logo' src='/cyborg-planet-1.png' /></h1>
      <div className='order-display'>
        <h2>Order for {orderName}</h2>
        <OrderImages foodId={foodId} sideId={sideId} drinkId={drinkId} />
      </div>
      <div className='order-form'>
        <OrderNameInput setOrderName={setOrderName} />
        {/* <FoodDropdown setFoodId={setFoodId} />
        <SideItemDropdown setSideId={setSideId} />
        <DrinkDropdown setDrinkId={setDrinkId} /> */}
        <MyDropdowns setFoodId={setFoodId} setDrinkId={setDrinkId} setSideId={setSideId} />
        <InstructionsForm setInstructions={setInstructions} instructions={instructions} />
        <InstructionsList instructions={instructions} />
      </div>
    </div>
  );
}

export default App;
