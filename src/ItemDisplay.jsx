import { useState, useEffect } from "react";
import AddItem from "./AddItem";

const ItemDisplay = (props) => {
    const items = props.items || [];
    const handleBuy = props.handleBuy;
    const count= props.count;
    return (
      <div className="Item-Border-Box">
        <h2>Items</h2>
        {items.map((item, index) => (
          <div className="ItemNameDP" key={index}>
            <div className="ItemD">Item Name: <a href="#">{item.name}</a> </div>
            <div className="ItemD">Item Price: <a href="#">{item.price}$</a></div>
            <button className="BuyButton" onClick={() => handleBuy(item)}>Buy</button>
          </div>
        ))}
      </div>
    );
  };
export default ItemDisplay;
