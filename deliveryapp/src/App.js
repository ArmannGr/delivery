import Main from "./Pages/Main/main";
import Header from './common/Header'
import Footer from './common/Footer';
import {
    BrowserRouter as Router,
    Route,
    Switch

} from "react-router-dom";
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-select2-wrapper/css/select2.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Login from './Pages/Login/Login'
import Register from "./Pages/Register/Register";
import Checkout, {CHECKOUT_ROUTE} from "./Pages/checkout/Checkout";
import RestaurantDetail from "./Pages/Detail/restaurantDetail";
import TestPage from "./testing/test";
import RestaurantListing from "./Pages/RestaurantListing/RestaurantListing";
import {AuthProvider} from "./contexts/AuthContext";
import TrackOrder, {TRACK_ORDER_PATH} from "./Pages/TrackOrder/TrackOrder";
import OrderHistory from "./Pages/OrderHistory/OrderHistory";
import Settings from "./Pages/settings/settings";

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

                    <Route path={CHECKOUT_ROUTE} exact={true}>
                        <Checkout/>
                    </Route>

                    <Route path="/login" exact={true}>
                        <Login/>
                    </Route>

                    <Route path="/register" exact={true}>
                        <Register/>
                    </Route>

                    <Route path="/detail" exact={true}>
                        <RestaurantDetail/>
                    </Route>

                    <Route path="/listing" exact={true} >
                        <RestaurantListing/>
                    </Route>


                    <Route path='/test' exact={true}>
                        <TestPage/>
                    </Route>

                    <Route path={TRACK_ORDER_PATH} exact={true  }>
                        <TrackOrder/>
                    </Route>

                    <Route path={'/orderhistory'} exact={true}>
                        <OrderHistory/>
                    </Route>

                    <Route path={'/settings'} exact={true}>
                        <Settings/>
                    </Route>

                </Switch>

                <Route render={probs =>(
                    (probs.location.pathname!=='/login' && probs.location.pathname!=='/register' && probs.location.pathname!== CHECKOUT_ROUTE) ? <Footer/>:''
                )}/>

            </Router>
        </AuthProvider>
    );
}

export default App;
