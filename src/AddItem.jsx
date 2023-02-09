import { useState, useEffect } from "react";
import ItemDisplay from "./ItemDisplay";

const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (itemName === "" || itemPrice === "") {
      alert("enter both the item and the price");
      return;
    }

    setItems([...items, { name: itemName, price: itemPrice }]);
    setItemName("");
    setItemPrice("");
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    if (typeof name === "string") {
      setItemName(name);
    }
  };

  const handlePriceChange = (event) => {
    const price = parseFloat(event.target.value);
    if (!isNaN(price)) {
      setItemPrice(price);
    }
  };

  return (
    <>
      <h1>Add Items</h1>
      <form onSubmit={handleSubmit}>
        <p>Fill the parts before adding item</p>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          placeholder="Item Price"
          value={itemPrice}
          onChange={handlePriceChange}
        />
        <br />
        <button type="submit" style={{ cursor: "pointer"  }}>Add Item</button>
      </form>
      <ItemDisplay items={items} />
    </>
  );
};

export default AddItem;
