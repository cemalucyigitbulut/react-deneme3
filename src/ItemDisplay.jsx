import { useState, useEffect } from "react";
import AddItem from "./AddItem";

const ItemDisplay = (props) => {
    const items = props.items || [];
    const handleBuy = props.handleBuy;
    return (
      <div className="Item-Border-Box">
        <h2>Items</h2>
        {items.map((item, index) => (
          <div key={index}>
            <div>Item Name: {item.name}</div>
            <div>Item Price:{item.price}</div>
            <button onClick={() => handleBuy(item)}>Buy</button>
          </div>
        ))}
      </div>
    );
  };
export default ItemDisplay;
