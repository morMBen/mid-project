import GoogleLogIn from '../googleLogIn/GoogleLogIn'
import './login.css'
const LogIn = ({ openCloseLogMenu, setUserlog, setUserDetails }) => {
    return (
        <div className="login-container" style={{ background: "grey" }}>
            <div className="login-body ui segment">
                <h1>Please choose a way to log in</h1>
                <div className="login-buttons">
                    <div className='log-in-button'>
                        <GoogleLogIn
                            setUserlog={setUserlog}
                            setUserDetails={setUserDetails} />
                    </div>
                    <button
                        style={{ marginTop: '2rem' }}
                        className="ui primary basic button"
                        // className='log-in-button'
                        onClick={openCloseLogMenu}
                    >
                        Go Back
                    </button>
                </div>
            </div>

        </div >
    )
}
export default LogIn;