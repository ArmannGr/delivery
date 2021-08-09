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

function App() {
    return (
        <>
            <Router>

                <Route render={probs =>(
                    (probs.location.pathname!=='/login' && probs.location.pathname!=='/register') ? <Header/>:''
                )}/>

                <Switch>

                    <Route path="/" exact={true}>
                        <Main/>
                    </Route>
                </Switch>

                <Route render={probs =>(
                    (probs.location.pathname!=='/login' && probs.location.pathname!=='/register') ? <Footer/>:''
                )}/>

            </Router>
        </>
    );
}

export default App;
