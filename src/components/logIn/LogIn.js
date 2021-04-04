import GoogleLogIn from '../googleLogIn/GoogleLogIn'
import './login.css'
const LogIn = ({ openCloseLogMenu, setUserlog, setUserDetails }) => {
    return (
        <div className="login-container">
            <div className="login-body">
                <h2>Please choose a way to log in</h2>
                <div className="login-buttons">
                    <div className='log-in-button'>
                        <GoogleLogIn
                            setUserlog={setUserlog}
                            setUserDetails={setUserDetails} />
                    </div>
                    <button
                        className='log-in-button'
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