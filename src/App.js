import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/constants/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetails from './components/posts/PostDetails';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreatePost from './components/posts/CreatePost';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/post/:id' component={PostDetails} />
            <Route path='/login/' component={Login} />
            <Route path='/register/' component={Register} />
            <Route path='/create/' component={CreatePost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
