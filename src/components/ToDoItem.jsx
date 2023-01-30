import React, { useState } from "react";

function ToDoItem(props) {
  const [isSelected, setSelected] = useState(false);

  const handleCssClass = () => {
    setSelected((prevSelected) => {
      return prevSelected ? false : true;
    });
  };

  return (
    <div>
      <li
        onClick={() => {
          handleCssClass();
        }}
        className={isSelected ? "selected" : "notSelected"}
      >
        {props.text}
        <button onClick={() => props.onChecked(props.id)} className="delete">
          Delete
        </button>
      </li>
    </div>
  );
}

export default ToDoItem;
