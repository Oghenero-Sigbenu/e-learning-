import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from "react-router-dom";
import {Home,Login,Signup,Logout} from "./components/pages/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/signup" component={Signup} />
        <Route path="/" exact component={Home} />
        <Route render={() => <h2>Not Found</h2>} />
    </Switch>
    </div>
  );
}

export default App;
