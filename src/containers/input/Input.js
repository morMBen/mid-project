import './input.css'

const Input = ({ onUserChange, userValue, inputTitle, id, typingErrorText }) => {

    return (
        <>
            <div className='ic-container'>
                <h3>{inputTitle}</h3>
                <div>
                    <input
                        className='ic_input'
                        id={id}
                        onChange={onUserChange}
                        value={userValue}
                    />
                </div>
                <h4 className="ic_input">{typingErrorText}</h4>
            </div>
            <br />
        </>
    )
}

export default Input;