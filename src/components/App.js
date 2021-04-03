import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'


import Navbar from './navbar/Navbar';
import Home from './home/Home';
import MyAccount from './myAccount/MyAccount'
import Posts from './posts/Posts'
function App() {

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/my-account" exact component={MyAccount} />
        <Route path="/posts" component={Posts} />
        <Link to='/'>
          <button  >Home</button>
        </Link>
        <Link to='/my-account'>
          <button  >My Account</button>
        </Link>
        <Link to='/posts'>
          <button  >Posts</button>
        </Link>
      </BrowserRouter>
    </div >
  );
}

export default App;
