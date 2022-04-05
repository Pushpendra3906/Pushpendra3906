import React, { Component } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import List from "../../components/List/List";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      list: [],
    };
  }

  inputChangeHandler = (event) => {
    const inputText = event.target.value;
    this.setState({
      inputText,
    });
  };

  btnClickHandler = () => {
    const { inputText, list } = this.state;
    if (inputText.trim()) {
      const items = [...list];
      items.push(inputText);
     
      this.setState({
        inputText: "",
        list: items,
      });
    } else {
      this.setState({
        inputText: "",
      });
    }
  };

  inputKeyHandler = (event) => {
    if (event.keyCode === 13) {
      this.btnClickHandler();
    }
  };

  componentDidMount() {
    const items = JSON.parse(localStorage.getItem("todoList"));
    if (items) {
      this.setState({
        list: items,
      });
    }
  };
 
  componentDidUpdate () {
    console.log('componentDidUpdate')
    localStorage.setItem("todoList", JSON.stringify(this.state.list));
  };

  componentWillUnmount () {
    console.log('component will unmount');
  }

  render() {
    const { inputText, list } = this.state;
    const { title } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <Input
          value={inputText}
          inputChangeHandler={this.inputChangeHandler}
          inputKeyHandler={this.inputKeyHandler}
        />
        <Button
          btnLabel="Add task to List"
          btnClickHandler={this.btnClickHandler}
        />
        <List list={list} />
      </>
    );
  }
}

export default Todo;
