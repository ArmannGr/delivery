import Main from "./Pages/Main/main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-select2-wrapper/css/select2.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
      <Router>
        <Switch>
            <Route path="/" exact={true}>
                <Main/>
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
