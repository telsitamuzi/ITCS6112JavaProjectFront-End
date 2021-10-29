import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//https://www.youtube.com/watch?v=eJyZ7k6lWfE
//import Login from "./components/login.component";
import SignUp from './signup/signup';
import SignIn from './signin/signin';
import ThankYou from './signup/thankyou';
import Admin from './admin/admin';
import CreateEvent from './admin/component/CreateEvent';
import Navbar from './nav/navbar';
import ViewEvent from './admin/component/viewEvent';
import Success from './signin/success';

function App() {
  return (<Router>
    <div className="App">

   <Navbar />


      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/thank-you" component={ThankYou} />
        <Route exact path="/admin" component={Admin} />
        <Route path="/admin/create-event" component={CreateEvent} />
        <Route path="/view-event/:id" component={ViewEvent} />


      </Switch>
    </div>
  </Router>
  );
}

export default App;