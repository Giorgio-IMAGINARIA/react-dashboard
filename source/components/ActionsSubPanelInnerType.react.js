"use strict";
import Radium from 'radium';
import StyleRoot from 'radium/lib/components/style-root';
import React from 'react';
var _ = require('lodash');
//Stores
var StoreConsole = require('../stores/StoreConsole');
//Actions
var ActionCreatorModifyConsole = require('../actions/ActionCreatorModifyConsole');
//Material UI Modules
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField/TextField';
import SelectField from 'material-ui/SelectField/SelectField';
import IconButton from 'material-ui/IconButton/IconButton';
import Request from 'material-ui/svg-icons/action/input';

var ActionsSubPanelInnerType = React.createClass({
    getInitialState: function() {
        return {jsonTyped: ''};
    },
    onConsoleChange: function() {
        var jsonTypedStore = StoreConsole.getJsonTyped();
        if (this.state.jsonTyped !== jsonTypedStore) {
            this.setState({jsonTyped: jsonTypedStore});
        };
    },
    handleChange: function(event) {
        ActionCreatorModifyConsole.sendJsonToAPIActionCreator(event.target.value)
    },
    render: function() {
        var textAreaWrapStyle = {
            transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            width: '412px',
            height: this.props.textAreaHeight,
            overflow: 'auto'
        };
        var textAreaStyle = {
            transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            letterSpacing: '1px',
            fontSize: '15px',
            color: '#98c379',
            border: 'none',
            width: '600px',
            height: this.props.textAreaHeight,
            backgroundColor: 'transparent',
            resize: 'none',
            padding: '10px',
            ':focus': {
                outline: 'none'
            }
        };

        return (
            <StyleRoot>
                <div style={textAreaWrapStyle}>
                    <textarea value={this.state.jsonTyped} onChange={this.handleChange} style={textAreaStyle}></textarea>
                </div>
            </StyleRoot>
        );
    },
    componentDidMount: function() {
        StoreConsole.addChangeListener(this.onConsoleChange);
    },

    componentWillUnmount: function() {
        StoreConsole.removeChangeListener(this.onConsoleChange);
    }

});
module.exports = ActionsSubPanelInnerType;
