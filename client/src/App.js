import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "InventoryInputs">
        <label>Product Name:</label>
        <input type="text"/>
        <label>Product Code:</label>
        <input type="text"/>
        <label>Brand:</label>
        <input type="text"/>
        <label>Price:</label>
        <input type="number"/>
        <label>Quantity:</label>
        <input type="number"/>
        <label>Date Added:</label>
        <input type="text"/>
        <button>Add Item</button>
      </div>
    </div>
  );
}

export default App;
