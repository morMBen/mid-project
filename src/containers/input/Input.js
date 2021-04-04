import './input.css'

import { useState } from "react";

const Input = ({ onUserChange, userValue, inputTitle, id, typingErrorText }) => {

    const [isEmptyError, setIsEmptyError] = useState(false)



    return (
        <div className='ic-container'>
            <h3>{inputTitle}</h3>
            <div>
                <input
                    className='ic_input'
                    id={id}
                    onChange={onUserChange}
                    value={userValue}>
                </input>
            </div>
            <h4 style={{ visibility: isEmptyError ? 'visible' : 'hidden' }}>{typingErrorText}</h4>
        </div>

    )
}

export default Input;