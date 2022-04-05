import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";

const Todo = () => {
  //***********  Functional based component  **********//
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  useEffect(()=>{
    console.log('componentDidMount');
    const items = JSON.parse(localStorage.getItem('todoList'))
    if(items){
      setList(items);
    }
  }, []);

  useEffect(()=>{
    return ()=>{
      console.log('componentWillUnmount')
    };
  }, []);

  useEffect(()=>{
    console.log('componentDidUpdate');
    localStorage.setItem('todoList', JSON.stringify(list));
  },[list]);

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    setInputText(value);
  };

  const btnClickHandler = () => {
    if (inputText.trim()) {
      const items = [...list];
      items.push(inputText);
      setList(items);
    }
    setInputText("");
  };

  const inputKeyHandler = (event) => {
    if (event.keyCode === 13) {
      btnClickHandler();
    }
  };

  return (
    <>
      <h1>TODO-APP</h1>
      <Input
        value={inputText}
        inputChangeHandler={inputChangeHandler}
        inputKeyHandler={inputKeyHandler}
      />
      <Button btnLabel="Add task to List" btnClickHandler={btnClickHandler} />
      <List list={list} />
    </>
  );
};

export default Todo;
