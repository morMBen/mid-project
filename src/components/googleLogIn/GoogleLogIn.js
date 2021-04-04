import React, { useState } from 'react';
import GoogleLogIn from 'react-google-login';

const MyGoogleLogIn = () => {
    const [userInit, setUserInit] = useState('Sing In')
    const [isSign, setIsSign] = useState(false);

    const responseGoogle = (response) => {
        if (!isSign) {
            if (response.profileObj) {
                setUserInit(response.profileObj.givenName[0])
                setIsSign(true)
            }
        }
        console.log(response)
        console.log(response.profileObj)
    }

    const signIn = () => {
        return (<GoogleLogIn
            // ↓↓↓↓↓↓ local ↓↓↓↓↓↓
            clientId="202064866705-0icj94b2ehlcladq0p3gt5vn9b86ofrk.apps.googleusercontent.com"
            // ↓↓↓↓↓↓ netlify url ↓↓↓↓↓↓
            // clientId="668980613804-snpjdn3okjivv6l78rvaspbg0k2bp39l.apps.googleusercontent.com"
            buttonText={userInit}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            style={{ textDecoration: 'none' }}
        />

        )
    }

    return (
        <div>
            {!isSign && signIn()}
        </div>

    )
}

export default MyGoogleLogIn;