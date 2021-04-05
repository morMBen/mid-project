import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios';

import MockAPI from '../apis/MockAPI'

import Sidebar from './sidebar/Sidebar'
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
  //user Id
  const [userId, setUserId] = useState(null)//???
  //users Data 
  const [usersData, setUsersData] = useState(null)


  const openCloseLogMenu = () => {
    setLogInIsOpen(!isLogInIsOpen);
  }

  useEffect(() => {
    const tempData = async () => {
      setUsersData(await MockAPI())
    }
    tempData()
  }, [])

  useEffect(() => {
    if (userDetails) {
      setUserId(userDetails.googleId)
      console.log(usersData.findIndex(e => e.googleId === userDetails.googleId))
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
  }, [userDetails])

  // useEffect(() => {
  //   console.log(usersData)
  // }, [usersData])


  return (<>
    {/* {usersData && <h1>{usersData[0] ? usersData[0].name : ''}</h1>} */}
    {userId && <h1>{userId}</h1>}
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
          <div style={{ width: '75%' }}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/my-account" exact component={MyAccount} />
              <Route path="/posts" exact component={Posts} >
                <Posts userId={userId} setUsersD={setUsersData} usersD={usersData} />
              </Route>
            </Switch>
          </div>
          <div style={{ width: '25%' }}>
            <Sidebar />
          </div>
        </div>
      </BrowserRouter>
    </div >
  </>
  );
}

export default App;
