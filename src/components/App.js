import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Navbar from './navbar/Navbar';
import Home from '../pages/home/Home';
import MyAccount from '../pages/myAccount/MyAccount'
import Posts from '../pages/posts/Posts'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/my-account" exact component={MyAccount} />
          <Route path="/posts" exact component={Posts} />
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
