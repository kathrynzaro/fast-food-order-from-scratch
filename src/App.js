import { useState } from 'react';
import './App.css';
import OrderNameInput from './OrderNameInput';
import FoodDropdown from './FoodDropdown';
import SideItemDropdown from './SideItemDropdown';
import OrderImages from './OrderImages';


function App() {

  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [orderName, setOrderName] = useState('Kat');

  return (
    <div className="App">

      <div>
        <h2>Order for {orderName}</h2>
        <OrderImages foodId={foodId} sideId={sideId} />
      </div>
      <div className='order-form'>
        <OrderNameInput setOrderName={setOrderName} />
        <FoodDropdown setFoodId={setFoodId} />
        <SideItemDropdown setSideId={setSideId} />
      </div>
    </div>
  );
}

export default App;
