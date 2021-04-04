import React, { useState } from 'react';
import GoogleLogIn from 'react-google-login';

const MyGoogleLogIn = ({ setUserlog, setUserDetails }) => {
    const [isSign, setIsSign] = useState(false);

    const signIn = () => {
        return (<GoogleLogIn
            // ↓↓↓↓↓↓ local ↓↓↓↓↓↓
            clientId="202064866705-0icj94b2ehlcladq0p3gt5vn9b86ofrk.apps.googleusercontent.com"
            // ↓↓↓↓↓↓ netlify url ↓↓↓↓↓↓
            // clientId="668980613804-snpjdn3okjivv6l78rvaspbg0k2bp39l.apps.googleusercontent.com"
            buttonText='Sign in with Google'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />

        )
    }
    const responseGoogle = async (response) => {
        console.log(isSign)
        if (!isSign) {
            if (response.profileObj) {
                setIsSign(true)
                await setUserlog(true)
            }
            setUserDetails(response.profileObj)
        }
        // console.log(response)
        console.log(response.profileObj)
    }




    return (
        <div>
            {signIn()}
        </div>

    )
}

export default MyGoogleLogIn;