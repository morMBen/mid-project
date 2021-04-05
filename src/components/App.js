import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios';

// import '../../public/style.css'

import MockAPI from '../apis/MockAPI'

import Sidebar from './sidebar/Sidebar'
import Navbar from './navbar/Navbar';
import Home from '../pages/home/Home';
import MyAccount from '../pages/myAccount/MyAccount'
import Posts from '../pages/posts/Posts'
import LogIn from '../components/logIn/LogIn'

let Context = React.createContext();

function App() {
  //user loged or not
  const [userlog, setUserlog] = useState(false)
  //log in window is open or not
  const [isLogInIsOpen, setLogInIsOpen] = useState(false);
  //user state by google
  const [userDetails, setUserDetails] = useState(null)
  //user Id
  const [userId, setUserId] = useState(null)//???
  //users Data 
  const [usersData, setUsersData] = useState(async () => {
    const data = await MockAPI();
    setUsersData(data)
  })



  const openCloseLogMenu = () => {
    setLogInIsOpen(!isLogInIsOpen);
  }

  useEffect(() => {
    if (userDetails) {
      setUserId(userDetails.googleId)
    }
  }, [userDetails])

  useEffect(() => {
    if (userId && usersData && userDetails) {

      const index = usersData.findIndex(e => e.googleId === userDetails.googleId);
      if (index === -1) {
        axios.post(`https://605b218e27f0050017c063ab.mockapi.io/users`, {
          googleId: userDetails.googleId,
          avatar: userDetails.imageUrl,
          name: userDetails.name,
          last: userDetails.familyName,
          first: userDetails.givenName,
          article: [],
        })
      }
    }
  }, [userId, usersData, userDetails])




  return (
    <>
      {/* {usersData && <h1>{usersData[0] ? usersData[0].name : ''}</h1>} */}
      {/* {userId && <h1>{userId}</h1>} */}
      {isLogInIsOpen && !userlog &&
        <LogIn
          openCloseLogMenu={openCloseLogMenu}
          setUserlog={setUserlog}
          setUserDetails={setUserDetails}
        />}
      <div className="App" >
        <BrowserRouter>
          <Navbar
            userlog={userlog}
            openCloseLogMenu={openCloseLogMenu}
            userDetails={userDetails}
          />
          <div style={{ display: 'flex' }}>
            <div className="app-main">
              <Switch>
                <Route path="/" exact component={Home} >
                  <Home userId={userId} setUsersD={setUsersData} usersD={usersData} />
                </Route>
                <Route path="/home" exact component={Home} />
                <Route path="/my-account" exact component={MyAccount} />
                <Route path="/posts" exact component={Posts} >
                  <Posts userId={userId} setUsersD={setUsersData} usersD={usersData} />
                </Route>
              </Switch>
            </div>
            <div className="app-side-bar">
              <Sidebar />
            </div>
          </div>
        </BrowserRouter>
      </div >
    </>
  );
}

export default App;
