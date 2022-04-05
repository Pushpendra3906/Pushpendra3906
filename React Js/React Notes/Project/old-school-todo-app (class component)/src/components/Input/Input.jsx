const Input = ({ value, inputChangeHandler, inputKeyHandler }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={inputChangeHandler}
      onKeyUp={inputKeyHandler}
    />
  );
};

export default Input;
