const Input = ({ onUserChange, userValue, inputTitle, id }) => {
    return (
        <input id={id} onChange={onUserChange} value={userValue}></input>

    )
}

export default Input;