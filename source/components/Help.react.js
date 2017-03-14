var React = require('react');
//Actions
var ActionCreatorSetLoginDetails = require('../actions/ActionCreatorSetLoginDetails');

//Stores
var StoreInitialise = require('../stores/StoreInitialise');

import {browserHistory} from 'react-router'

var Help = React.createClass({
    temporaryTitleStyle: {
        color: '#8f9498',
        fontFamily: 'Noto Sans, sans-serif',
        fontSize: '25pt',
        fontWeight: '100',
        margin: '0px'
    },
    componentWillMount: function() {
        if (!StoreInitialise.getInitialised()) {
            $.ajax({context: this, url: '/credentialsDetails'}).fail(function(data) {
                console.log('Login Details Error: ' + data.status + '\r\n' + data.statusText);
                browserHistory.replace('/login');
            }).done(function(data) {
                ActionCreatorSetLoginDetails.setUserValueActionCreator(data);
            });
        };
    },
    render: function() {
        return (
            <p style={this.temporaryTitleStyle}>{'HELP'}</p>
        );
    }
});

module.exports = Help;
