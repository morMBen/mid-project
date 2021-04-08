import './input.css'

const Input = ({ onUserChange, userValue, inputTitle, id, typingErrorText }) => {

    return (
        <>
            <div className='ic-container'>
                <h3>{inputTitle}</h3>
                <div>
                    <div className="ui input"
                        style={{ width: '100%' }}
                    >
                        <input

                            input type="text"
                            placeholder={userValue}
                            className='ic_input'
                            id={id}
                            onChange={onUserChange}
                            value={userValue}
                        />
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}

export default Input;