import GoogleLogIn from 'react-google-login';
const MyGoogleLogIn = () => {
    const responseGoogle = (response) => {
        console.log(response)
        console.log(response.profileObj)
    }

    return (
        <div>
            <GoogleLogIn
                // ↓↓↓↓↓↓ local ↓↓↓↓↓↓
                // clientId="202064866705-0icj94b2ehlcladq0p3gt5vn9b86ofrk.apps.googleusercontent.com"
                // ↓↓↓↓↓↓ netlify url ↓↓↓↓↓↓
                clientId="668980613804-snpjdn3okjivv6l78rvaspbg0k2bp39l.apps.googleusercontent.com"
                buttonText="Sing In"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                style={{ textDecoration: 'none' }}
            />
        </div>

    )
}

export default MyGoogleLogIn;