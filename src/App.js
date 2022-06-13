import { useState } from 'react';
import './App.css';
import OrderNameInput from './OrderNameInput';
import FoodDropdown from './FoodDropdown';
import OrderImages from './OrderImages';


function App() {

  const [foodId, setFoodId] = useState(1);
  const [orderName, setOrderName] = useState('Kat');

  return (
    <div className="App">

      <div>
        <h2>Order for {orderName}</h2>
        <OrderImages foodId={foodId} />
      </div>
      <div className='order-form'>
        <OrderNameInput setOrderName={setOrderName} />
        <FoodDropdown setFoodId={setFoodId} />

      </div>
    </div>
  );
}

export default App;
