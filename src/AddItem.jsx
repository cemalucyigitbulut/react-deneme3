import { useState, useEffect } from "react";
import ItemDisplay from "./ItemDisplay";

const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [items, setItems] = useState(JSON.parse(sessionStorage.getItem("items")) || []);
  const [count, setCount] = useState(() => {
    const countFromStorage = sessionStorage.getItem("count");
    return countFromStorage !== null ? Number(countFromStorage) : 0;
  });


  const handleSubmit = (event) => {
    event.preventDefault();

    if (itemName === "" || itemPrice === "") {
      alert("enter both the item and the price");
      return;
    }

    setItems([...items, { name: itemName, price: Number(itemPrice) }]);
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


  const handleBuy = (item) => {
    const countFromSession = Number(sessionStorage.getItem("count"));
    if (countFromSession < item.price) {
      alert("You don't have enough money to buy this item");
      return
    }
    const newCount = countFromSession - item.price;
    sessionStorage.setItem("count", newCount);
    setCount(newCount);
    setItems(items.filter((i) => i !== item));
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
      <ItemDisplay items={items} handleBuy={handleBuy} />
    </>
  );
};

export default AddItem;
