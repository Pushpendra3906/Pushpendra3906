import React from "react";

const Input = ({ value, inputChangeHandler, inputKeyHandler }) => {
  // const {value} = props.value;   destructuring
  return (
    <div>
      <input 
      type="text" 
      value={value}
      onChange={inputChangeHandler} 
      onKeyUp={inputKeyHandler} 
      />
    </div>
  );
};
export default Input;
