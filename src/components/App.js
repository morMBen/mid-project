import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'


import Navbar from './navbar/Navbar';
import Home from './home/Home';
import MyAccount from './myAccount/MyAccount'
import Posts from './posts/Posts'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Route path="/" component={Navbar} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/my-account" exact component={MyAccount} />
        <Route path="/posts" exact component={Posts} />
        {/* <Link to='/'>
          <button  >Home</button>
        </Link>
        <Link to='/my-account'>
          <button  >My Account</button>
        </Link>
        <Link to='/posts'>
          <button  >Posts</button>
        </Link> */}
      </BrowserRouter>
    </div >
  );
}

export default App;
