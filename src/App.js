import { useState } from 'react';
import './App.css';
import OrderNameInput from './OrderNameInput';


function App() {

  const [orderName, setOrderName] = useState('Kat');

  return (
    <div className="App">

      <div>
        <h2>Order for {orderName}</h2>
      </div>
      <div className='order-form'>
        <OrderNameInput setOrderName={setOrderName} />

      </div>
    </div>
  );
}

export default App;
