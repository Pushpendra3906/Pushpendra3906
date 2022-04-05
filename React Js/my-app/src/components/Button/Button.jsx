import React from "react";

export default function Button({ btnLabel, btnClickHandler }) {
  return (
    <div>
     <button onClick={btnClickHandler}>{btnLabel}</button>
    </div>
  );
}
