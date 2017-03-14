"use strict";
require('events').EventEmitter.prototype._maxListeners = 100;
import {Router, Route, browserHistory, IndexRedirect} from 'react-router'
import React from 'react';
import ReactDOM from 'react-dom';
var injectTapEventPlugin = require('react-tap-event-plugin');
//React Modules
var App = require('./components/App.react');
var Login = require('./components/Login.react');
var Dashboard = require('./components/Dashboard.react');
var Help = require('./components/Help.react');
var NotFound = require('./components/NotFound.react');
//Actions

var SetClientEnvironment = require('./library/SetClientEnvironment');

injectTapEventPlugin();

SetClientEnvironment.setApiAddress();

var RouterComponent = React.createClass({
    render: function() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRedirect to="/login"/>
                    <Route path="/login" component={Login}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/help" component={Help}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        );
    }
});

module.exports = RouterComponent;

ReactDOM.render((<RouterComponent/>), document.getElementById('pageToRender'));
