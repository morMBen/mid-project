import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Navbar from './navbar/Navbar';
import Home from '../pages/home/Home';
import MyAccount from '../pages/myAccount/MyAccount'
import Posts from '../pages/posts/Posts'
import LogIn from '../components/logIn/LogIn'
function App() {
  //user loged or not
  const [userlog, setUserlog] = useState(false)
  //log in window is open or not
  const [isLogInIsOpen, setLogInIsOpen] = useState(false);
  //user state by google
  const [userDetails, setUserDetails] = useState(null)

  const openCloseLogMenu = () => {
    setLogInIsOpen(!isLogInIsOpen);
  }


  return (<>
    {/* {usetDetails && <h1>{usetDetails.googleId}</h1>} */}
    {isLogInIsOpen && !userlog &&
      <LogIn
        openCloseLogMenu={openCloseLogMenu}
        setUserlog={setUserlog}
        setUserDetails={setUserDetails}
      />}
    <div className="App">
      <BrowserRouter>
        <Navbar
          userlog={userlog}
          openCloseLogMenu={openCloseLogMenu}
          userDetails={userDetails}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/my-account" exact component={MyAccount} />
          <Route path="/posts" exact component={Posts} />
        </Switch>
      </BrowserRouter>
    </div >
  </>
  );
}

export default App;
