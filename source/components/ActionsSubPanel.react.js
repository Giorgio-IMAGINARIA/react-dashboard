"use strict";
import React from 'react';
var _ = require('lodash');
//Actions
var ActionCreatorModifyConsole = require('../actions/ActionCreatorModifyConsole');
//Stores
//React Modules
var ActionsSubPanelInner = require('./ActionsSubPanelInner.react');
var ActionsSubPanelInnerType = require('./ActionsSubPanelInnerType.react');
//Material UI Modules
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton/IconButton';
import Send from 'material-ui/svg-icons/navigation/subdirectory-arrow-right';
import Receive from 'material-ui/svg-icons/navigation/subdirectory-arrow-left';
import Type from 'material-ui/svg-icons/hardware/keyboard';
import ClearAll from 'material-ui/svg-icons/navigation/close';
import Expand from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import Compress from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import SendJson from 'material-ui/svg-icons/action/open-in-browser';
import Snackbar from 'material-ui/Snackbar';

var toolbarLeftIconStyle = {
    paddingLeft: '15px'
};

var toolbarStyle = {
    height: '50px',
    backgroundColor: '#25aae1',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
};

var toolbarLeftIconWrapStyle = {
    width: '100%',
    height: 'inherit',
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

var rightToolBarGroup = {
    display: 'flex'
};
var headerButtonStyle = {};
var snackBarStyle = {
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif'
};

var ActionsSubPanel = React.createClass({
    getInitialState: function() {
        return {open: false, sendPanelOpen: false, receivePanelOpen: true, typedJsonPanelOpen: false};
    },
    handleRequestClose: function() {
        this.setState({open: false});
    },
    clearAll: function(panel) {
        ActionCreatorModifyConsole.clearPanelActionCreator(panel);
    },
    resize: function(panel) {
        switch (panel) {
            case 'sen':
                {
                    this.setState({
                        sendPanelOpen: !this.state.sendPanelOpen
                    });
                }
                break;
            case 'rec':
                {
                    this.setState({
                        receivePanelOpen: !this.state.receivePanelOpen
                    });
                }
                break;
            case 'ty':
                {
                    this.setState({
                        typedJsonPanelOpen: !this.state.typedJsonPanelOpen
                    });
                }
                break;
        };

    },
    sendJson: function() {
    },

    render: function() {
        var toolbarIcon;
        var elementName;
        var toolbarTitle;
        var panelContentToRender;
        var sendJsonIcon = null;
        var elementWrapStyle = {
            backgroundColor: '#282c34'
        };
        var toolbarLeftGroupStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        };
        var toolbarCentralGroupStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        };
        var toolbarRightGroupStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        };
        var addedHorSpace = {};

        switch (this.props.sbpantype) {
            case 'sen':
                {
                    var innerHeight;
                    if (this.state.sendPanelOpen) {
                        elementWrapStyle.height = '560px';
                        innerHeight = '510px';
                    } else {
                        elementWrapStyle.height = '50px';
                        innerHeight = '0px';
                    };
                    toolbarLeftGroupStyle.width = '15%';
                    addedHorSpace.width = '10%';
                    toolbarCentralGroupStyle.width = '70%';
                    toolbarRightGroupStyle.width = '25%';
                    toolbarIcon = <Send color={'#fff'} style={toolbarLeftIconStyle}/>;
                    elementName = 'Send';
                    panelContentToRender = <ActionsSubPanelInner height={innerHeight} sbpantype={this.props.sbpantype}/>;
                }
                break;
            case 'rec':
                {
                    var innerHeight;
                    if (this.state.receivePanelOpen) {
                        elementWrapStyle.height = '560px';
                        innerHeight = '510px';
                    } else {
                        elementWrapStyle.height = '50px';
                        innerHeight = '0px';
                    };
                    toolbarLeftGroupStyle.width = '15%';
                    addedHorSpace.width = '10%';
                    toolbarCentralGroupStyle.width = '70%';
                    toolbarRightGroupStyle.width = '25%';
                    toolbarIcon = <Receive color={'#fff'} style={toolbarLeftIconStyle}/>;
                    elementName = 'Receive';
                    panelContentToRender = <ActionsSubPanelInner height={innerHeight} sbpantype={this.props.sbpantype}/>;
                }
                break;
            case 'ty':
                {
                    var innerHeight;
                    var textAreaHeight;
                    if (this.state.typedJsonPanelOpen) {
                        elementWrapStyle.height = '560px';
                        innerHeight = '510px';
                        textAreaHeight = '510px';
                    } else {
                        elementWrapStyle.height = '50px';
                        innerHeight = '0px';
                        textAreaHeight = '0px';
                    };
                    toolbarLeftGroupStyle.width = '15%';
                    addedHorSpace.width = '20%';
                    toolbarCentralGroupStyle.width = '30%';
                    toolbarRightGroupStyle.width = '35%';
                    toolbarIcon = <Type color={'#fff'} style={toolbarLeftIconStyle}/>;
                    elementName = 'Type';
                    panelContentToRender = <ActionsSubPanelInnerType height={innerHeight} textAreaHeight={textAreaHeight}/>;
                    sendJsonIcon = <IconButton style={headerButtonStyle} onMouseDown={this.sendJson} tooltip="Send JSON" tooltipPosition="bottom-left"><SendJson color={'#fff'}/></IconButton>
                }
                break;
        };
        toolbarTitle = elementName.toUpperCase();

        return (
            <Paper style={elementWrapStyle} zDepth={2}>
                <div style={toolbarStyle}>
                    <div style={toolbarLeftGroupStyle}>
                        <div style={toolbarLeftIconWrapStyle}>
                            {toolbarIcon}
                        </div>
                    </div>
                    <div style={addedHorSpace}></div>
                    <div style={toolbarCentralGroupStyle}>
                        <p style={toolbarTitleStyle}>{toolbarTitle}</p>
                    </div>
                    <div style={toolbarRightGroupStyle}>
                        <div style={rightToolBarGroup}>
                            {sendJsonIcon}
                            <IconButton style={headerButtonStyle} onMouseDown={this.clearAll.bind(this, this.props.sbpantype)} tooltip="Clear All" tooltipPosition="bottom-left"><ClearAll color={'#fff'}/></IconButton>
                            <IconButton style={headerButtonStyle} onMouseDown={this.resize.bind(this, this.props.sbpantype)} tooltip="Expand" tooltipPosition="bottom-left"><Expand color={'#fff'}/></IconButton>
                        </div>
                    </div>
                </div>
                {panelContentToRender}
                <Snackbar style={snackBarStyle} open={this.state.open} message={'JSON not valid. Please, check again.'} autoHideDuration={4000} onRequestClose={this.handleRequestClose}/>
            </Paper>
        );
    }
});

module.exports = ActionsSubPanel;
