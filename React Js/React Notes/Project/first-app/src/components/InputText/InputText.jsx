import { useState } from 'react';
import Text from '../Text/Text';
import Input from './../Input/Input';

const InputText = () => {
    const defaultMsg = 'Please type something in input field to see the magic !!!';

    // It is hook to create the state
    const [text, setText] = useState(defaultMsg);

    const inputChangeHandler = (event)=>{
        const value = event.target.value.trim();
        //text = value;
        // To update the state, It is async in nature
        setText(value || defaultMsg);
        console.log(text);
    };

    return (
        <>
            <Input changeHandler={inputChangeHandler}/>
            <Text msg={text}/>
        </>
    );
};

export default InputText;