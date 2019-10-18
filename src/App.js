import React, { Component } from 'react';
import { Route  } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import './App.css';
import Signin from './Login/Signin';
import Users from './Login/Users';
import Newcart from './Login/Newcart';
import Addorganization from './Add/Addorganization';
import Dashboard from './Dashboard';
import Addbranch from './Add/Addbranch';
import Addadmin from './Add/Addadmin';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>

            <Route exact path="/" component={() => (<div className="App"><Signin /></div>)} />
            <Route exact path="/Login/Users" component={() => (<Users />)} />
            <Route exact path="/Login/Newcart" component={() => (<Newcart />)} />
            <Route exact path="/Add/Addorganization" component={() => (<Addorganization />)} />
            <Route exact path="/Dashboard" component={() => (<Dashboard />)} />
            <Route exact path="/Add/Addbranch" component={() => (<Addbranch />)} />
            <Route exact path="/Add/Addadmin" component={() => (<Addadmin />)} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;