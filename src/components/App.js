import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios';

import './app.css'

import MockAPI from '../apis/MockAPI'

import Sidebar from './sidebar/Sidebar'
import Navbar from './navbar/Navbar';
import Home from '../pages/home/Home';
import MyAccount from '../pages/myAccount/MyAccount'
import Posts from '../pages/posts/Posts'
import LogIn from '../components/logIn/LogIn'
import PostContainer from '../containers/postConainer/PostContainer'
import Edit from '../pages/edit/Edit'





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

  useEffect(() => {

  }, [])

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
        const starterData = {
          googleId: userDetails.googleId,
          avatar: userDetails.imageUrl,
          name: userDetails.name,
          last: userDetails.familyName,
          first: userDetails.givenName,
          article: [],
        }
        const fetch = async () => {
          const temp = await axios.post(`https://605b218e27f0050017c063ab.mockapi.io/users`, starterData)
          setUsersData(usersData ? [{ ...starterData }] : [...usersData, { ...starterData }])
          console.log(temp)
        }
        fetch();
      }
    }
  }, [userId, usersData, userDetails])




  return (
    <>


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
                <Route path="/" exact component={() =>
                  <Home
                    userId={userId}
                    isUserlog={userlog}
                    setUsersD={setUsersData}
                    usersD={usersData}
                  />
                } >
                </Route>
                <Route path="/home" exact component={Home} />
                <Route path="/my-account/:name" exact component={() =>
                  <MyAccount
                    userId={userId}
                    isUserlog={userlog}
                    setUsersData={setUsersData}
                    usersD={usersData}
                  />}
                />
                <Route path="/my-account/:name/:title/:edit" exact component={() =>
                  <Edit
                    userId={userId}
                    isUserlog={userlog}
                    setUsersData={setUsersData}
                    usersD={usersData}
                  />}
                />
                <Route path="/posts" exact component={() =>
                  <Posts
                    theUserId={userId}
                    setUsersD={setUsersData}
                    userlog={userlog}
                    usersD={usersData} />

                } />

                <Route path="/:aoutor/:name" exact component={() =>
                  <PostContainer
                    userId={userId}
                    usersD={usersData}
                    userlog={userlog}
                  />
                } >
                </Route>
              </Switch>
            </div>
            <div className="app-side-bar">
              <div className="side-bar">
                <Sidebar />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div >
    </>
  );
}

export default App;
