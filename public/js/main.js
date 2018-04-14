import React from 'react';
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from 'react-router';

import Login from "./containers/login-container"
import Register from "./containers/register-contaienr";
import Home from "./containers/home";
import LoginMiddleware from "./middlewares/login-middleware";
import RegisterMiddleware from "./middlewares/register-middleware";
import {createStore, applyMiddleware} from 'redux';
import reducer from "./reducers/index"


const createStoreWithMiddleware = applyMiddleware(LoginMiddleware,RegisterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Router>
    </Provider>, document.getElementById('app'));


