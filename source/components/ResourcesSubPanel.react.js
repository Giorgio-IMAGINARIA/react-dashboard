"use strict";
import React from 'react';
var _ = require('lodash');
//Stores
//React Modules
//Material UI Modules
import Paper from 'material-ui/Paper';
import HandsetBridge from 'material-ui/svg-icons/communication/dialpad';
import StaticBridges from 'material-ui/svg-icons/action/settings-input-component';
import DynamicLines from 'material-ui/svg-icons/communication/swap-calls';
import Calls from 'material-ui/svg-icons/communication/contact-phone';

var toolbarLeftIconStyle = {
    paddingLeft: '15px'
};

var elementWrapStyle = {
    backgroundColor: '#fff',
    transition: 'all 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
};

var toolbarStyle = {
    height: '50px',
    backgroundColor: '#25aae1',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
};

var toolbarLeftGroupStyle = {
    width: '15%',
    height: 'inherit',
    display: 'flex',
    alignItems: 'center'
};

var toolbarLeftIconWrapStyle = {
    width: '100%',
    height: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

var toolbarCentralGroupStyle = {
    height: '50px',
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

var toolbarTitleStyle = {
    margin: '0px',
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: '300',
    fontSize: '18pt',
    padding: '0px'
};

var ResourcesSubPanel = React.createClass({


    render: function() {
        var toolbarIcon;
        var elementName;
        var toolbarTitle;

        switch (this.props.res) {
            case 'CA':
                {
                    toolbarIcon = <Calls color={'#fff'} style={toolbarLeftIconStyle}/>;
                    elementName = 'Call';
                    elementWrapStyle.height = '160px';
                }
                break;
        };
        toolbarTitle = elementName.toUpperCase() + 'S';

        return (
            <Paper style={elementWrapStyle} zDepth={2}>
                <div style={toolbarStyle}>
                    <div style={toolbarLeftGroupStyle}>
                        <div style={toolbarLeftIconWrapStyle}>
                            {toolbarIcon}
                        </div>
                    </div>
                    <div style={toolbarCentralGroupStyle}>
                        <p style={toolbarTitleStyle}>{toolbarTitle}</p>
                    </div>
                </div>
            </Paper>
        );
    },
    componentDidMount: function() {
    },

    componentWillUnmount: function() {
    }

});

module.exports = ResourcesSubPanel;
