import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";

const Todo = () => {
    const [inputText, setInputText] = useState('');
    const [list, setList] = useState([]);

    const inputChangeHandler = (event)=>{
        const value = event.target.value;
        setInputText(value);
    };

    const btnClickHandler = ()=>{
        if(inputText.trim()){
            const items = [...list];
            items.push(inputText);
            setList(items);
        } 
        setInputText('');
    };

    const inputKeyHandler = (event)=>{
        if(event.keyCode === 13) {
            btnClickHandler();
        }
    };

    return (
        <>
            <Input 
                value={inputText}
                inputChangeHandler={inputChangeHandler}
                inputKeyHandler={inputKeyHandler}/>
            <Button 
                btnLabel="Add to the List"
                btnClickHandler={btnClickHandler}/>
            <List list={list}/>
        </>
    );
};

export default Todo;