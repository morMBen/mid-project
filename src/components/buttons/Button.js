const Button = ({ buttonValue, onClick }) => {
    return (
        <>

            <button onClick={onClick} className="ui violet basic button">{buttonValue}</button>
        </>
    )
}

export default Button;