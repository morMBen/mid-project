const Button = ({ buttonValue, onClick }) => {
    return (
        <button onClick={onClick}>{buttonValue}</button>
    )
}

export default Button;