import { useState, useEffect } from "react";
import ItemDisplay from "./ItemDisplay";

const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items,{name:itemName, price:itemPrice}])
    setItemName("")
    setItemPrice("")
  }

  return (
    <>
      <h1>Add Items</h1>
      <form onSubmit={handleSubmit}>
        <p>Fill the parts before adding item</p>
        <input type="text" placeholder="Item Name" value={itemName}  onChange={(event) => setItemName(event.target.value)} />
        <br />
        <input type="text" placeholder="Item Price" value={itemPrice} onChange={(event) => setItemPrice(event.target.value)}/>
        <br />
        <button type="submit">Add Item</button>
      </form>
      <ItemDisplay items={items} />
    </>
  );
};

export default AddItem;
