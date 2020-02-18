import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import UsersList from "./components/user-list.component";
import EditUser from "./components/edit-user.component";
import CreateUser from "./components/create-user.component";
import UserDetails from './components/user-details.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/create" component={CreateUser} />
          <Route exact path="/" component={UsersList} />
          <Route exact path="/:id" component={UserDetails} />
          <Route exact path="/edit/:id" component={EditUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
