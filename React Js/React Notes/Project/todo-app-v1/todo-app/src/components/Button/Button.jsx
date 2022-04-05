const Button = ({btnLabel, btnClickHandler}) => {
    return (
        <button onClick={btnClickHandler}>{btnLabel}</button>
    );
};

export default Button;