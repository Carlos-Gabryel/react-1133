import React, { useState } from "react";

export function DynamicList() {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    setItems([...items, text]);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const text = e.target.item.value;
          addItem(text);
          e.target.item.value = "";
        }}
      >
        <input type="text" name="item" placeholder="Enter item" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
