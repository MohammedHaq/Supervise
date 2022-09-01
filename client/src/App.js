import { useState } from 'react';
import './App.css';

function App() {

  const [ProductName, setName] = useState("");
  const [ProductCode, setCode] = useState("");
  const [Brand, setBrand] = useState("");
  const [Price, setPrice] = useState(0);
  const [Quantity, setQuantity] = useState(0);
  const [Date, setDate] = useState("");

  return (
    <div className="App">
      <div className = "InventoryInputs">
        <label>Product Name:</label>
        <input type="text" onChange={(event) => {setName(event.target.value)}}/>
        <label>Product Code:</label>
        <input type="text" onChange={(event) => {setCode(event.target.value)}}/>
        <label>Brand:</label>
        <input type="text" onChange={(event) => {setBrand(event.target.value)}}/>
        <label>Price:</label>
        <input type="number" onChange={(event) => {setPrice(event.target.value)}}/>
        <label>Quantity:</label>
        <input type="number" onChange={(event) => {setQuantity(event.target.value)}}/>
        <label>Date Added:</label>
        <input type="text" onChange={(event) => {setDate(event.target.value)}}/>
        <button>Add Item</button>
      </div>
    </div>
  );
}

export default App;
