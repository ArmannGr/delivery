import Main from "./Pages/Main/main";
import Header from './common/Header'
import Footer from './common/Footer';
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
import Login from './Pages/Login/Login'
import Register from "./Pages/Register/Register";
import { AuthProvider} from "./contexts/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Router>

                <Route render={probs =>(
                    (probs.location.pathname!=='/login' && probs.location.pathname!=='/register') ? <Header/>:''
                )}/>

                <Switch>

                    <Route path="/" exact={true}>
                        <Main/>
                    </Route>

                    <Route path="/login" exact={true}>
                        <Login/>
                    </Route>

                    <Route path="/register" exact={true}>
                        <Register/>
                    </Route>

                    <Route path="/detail" exact={true}>
                        <Detail/>
                    </Route>

                </Switch>

                <Route render={probs =>(
                    (probs.location.pathname!=='/login' && probs.location.pathname!=='/register') ? <Footer/>:''
                )}/>

            </Router>
        </AuthProvider>
    );
}

export default App;
