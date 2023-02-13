import { useState, useEffect } from "react";
import ItemDisplay from "./ItemDisplay";
import MoneyStuff from "./MoneyStuff";

const AddItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [items, setItems] = useState(JSON.parse(sessionStorage.getItem("items")) || []);
  const [count, setCount] = useState(() => {
    const countFromStorage = sessionStorage.getItem("count");
    return countFromStorage !== null ? Number(countFromStorage) : 0;
  });

  // const [errorMesaj , setErrorMesaj] = useState("");

  useEffect(()=>{
    setCount(Number(sessionStorage.getItem("count")) || 0)
  }, [sessionStorage.getItem("count")])

  // const itemWithSameName = items.find( (item) => item.name === itemName);
  // if (itemWithSameName) {
  //   setErrorMesaj("Item with that name already exists");
  //   // alert("Item with that name already exists");
  //   return;
  // }

  // setErrorMesaj();


  const handleSubmit = (event) => {
    event.preventDefault();

    if (itemName === "" || itemPrice === "") {
      alert("enter both the item and the price");
      return;
    }
    const newItems = [ { name: itemName, price: Number(itemPrice) } ,...items];
    setItems(newItems);
    sessionStorage.setItem("items", JSON.stringify(newItems));
    setItemName("");
    setItemPrice("");
    // setErrorMesaj("");
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
    setCount(() => newCount);
    const updateItems = items.filter((i) => i !== item)
    setItems(updateItems);
    sessionStorage.setItem("items", JSON.stringify(updateItems));
};

  return (
    <>
      <h1>Add Items</h1>
      {/* {errorMesaj && <p style={{ color:"red" }}>{errorMesaj}</p>} */}
      <form onSubmit={handleSubmit}>
        <p className="NormalText">Fill the parts before adding item</p>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={handleNameChange}
          className="AddItemName"
        />
        <br />
        <input
          type="text"
          placeholder="Item Price"
          value={itemPrice}
          onChange={handlePriceChange}
          className="AddItemPrice"
        />
        <br />
        <button className="AddItemButton" type="submit" style={{ cursor: "pointer"  }}>Add Item</button>
      </form>
      <ItemDisplay items={items} handleBuy={handleBuy} />
    </>
  );
};

export default AddItem;
