"use strict";
import Radium from 'radium';
var Style = Radium.Style;
var StyleRoot = require('radium/lib/components/style-root');
import React from 'react';
import {browserHistory} from 'react-router'
var _ = require('lodash');
var io = require('socket.io-client');
//Action Creators
var ActionCreatorSetLoginDetails = require('../actions/ActionCreatorSetLoginDetails');
var ActionCreatorInitialiseApp = require('../actions/ActionCreatorInitialiseApp');

//Stores
var StoreLoginDetailsState = require('../stores/StoreLoginDetailsState');
var StoreAddress = require('../stores/StoreAddress');
var StoreInitialise = require('../stores/StoreInitialise');
//Library Components
//React Components
var MainBody = require('./MainBody.react');

var Dashboard = React.createClass({
    dashboardWrap: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    initialiseApp: function() {
        ActionCreatorInitialiseApp.initialiseAppActionCreator();
    },

    componentWillMount: function() {
        console.log('dashboard will mount!!!');
        if (!StoreInitialise.getInitialised()) {
            console.log('StoreInitialise not initialised!!!');
            $.ajax({context: this, url: '/credentialsDetails'}).fail(function(data) {
                console.log('error from dashboard!!!');
                console.log('Login Details Error: ' + data.status + '\r\n' + data.statusText);
                browserHistory.replace('/login');
            }).done(function(data) {
                console.log("Login Details loaded: ", data);
                ActionCreatorSetLoginDetails.setUserValueActionCreator(data);
                var addressRoot = StoreAddress.getAddressRoot();
                var socket = 'your socket';
                this.initialiseApp();
            });
        };
    },

    render: function() {
        console.log('render this!!!');
        return (
            <StyleRoot style={this.dashboardWrap}>
                <Style rules={{
                    mediaQueries: {
                        '(max-width: 1349px)': {
                            body: {
                                height: 'initial'
                            }
                        },
                        '(min-width: 1350px)': {
                            body: {
                                height: '100%'
                            }
                        }
                    }
                }}/><MainBody/>
            </StyleRoot>
        );
    }
});

module.exports = Dashboard;
