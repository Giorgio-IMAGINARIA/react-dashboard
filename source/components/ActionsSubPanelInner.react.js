"use strict";
import React from 'react';
var _ = require('lodash');
//Stores
var StoreConsole = require('../stores/StoreConsole');
//Material UI Modules
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField/TextField';
import SelectField from 'material-ui/SelectField/SelectField';
import IconButton from 'material-ui/IconButton/IconButton';
import Request from 'material-ui/svg-icons/action/input';

var contentScrollingWrap = {
    paddingTop: '10px',
    paddingLeft: '10px'
};
var jsonStyle = {
    letterSpacing: '1px',
    fontSize: '15px',
    color: '#98c379',
    whiteSpace: 'pre'
};
var jsonStyleWrap = {
    letterSpacing: '1px',
    fontSize: '15px',
    color: '#abb2bf',
    whiteSpace: 'pre',
    marginBottom: '10px'
};

var HTMLReceivedStream = [];
var HTMLSentStream = [];

var ActionsSubPanelInner = React.createClass({
    onConsoleChange: function() {
        HTMLReceivedStream = [];
        HTMLSentStream = [];
        var receivedStream = StoreConsole.getReceiveStream();
        if (!_.isEmpty(receivedStream)) {
            for (var i = 0; i < receivedStream.length; i++) {
                var stringifiedHighlightedSyntax = JSON.stringify(receivedStream[i], null, 4);
                var highlightedSyntax = this.syntaxHighlight(stringifiedHighlightedSyntax);
                HTMLReceivedStream.push(<div dangerouslySetInnerHTML={{
                    __html: highlightedSyntax
                }} style={jsonStyleWrap} key={i}/>);
            };
        };
        var sentStream = StoreConsole.getSendStream();
        if (!_.isEmpty(sentStream)) {
            for (var i = 0; i < sentStream.length; i++) {
              var stringifiedHighlightedSyntax = JSON.stringify(sentStream[i], null, 4);
              var highlightedSyntax = this.syntaxHighlight(stringifiedHighlightedSyntax);
              HTMLSentStream.push(<div dangerouslySetInnerHTML={{
                  __html: highlightedSyntax
              }} style={jsonStyleWrap} key={i}/>);
            };
        };
        this.forceUpdate();
    },

    syntaxHighlight: function(json) {
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
            var cls = 'jsonNumberStyle';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'jsonKeyStyle';
                } else {
                    cls = 'jsonStringStyle';
                }
            } else if (/true|false/.test(match)) {
                cls = 'jsonBooleanStyle';
            } else if (/null/.test(match)) {
                cls = 'jsonNullStyle';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    },

    render: function() {
        var panelContentToRender;
        switch (this.props.sbpantype) {
            case 'sen':
                {
                    panelContentToRender = HTMLSentStream;
                }
                break;
            case 'rec':
                {
                    panelContentToRender = HTMLReceivedStream;
                }
                break;
        };
        var elementInnerWrapStyle = {
            transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            width: 'inherit',
            height: this.props.height,
            overflow: 'auto'
        };

        return (
            <div style={elementInnerWrapStyle}>
                <div style={contentScrollingWrap}>
                    {panelContentToRender}
                </div>
            </div>
        );
    },
    componentDidMount: function() {
        StoreConsole.addChangeListener(this.onConsoleChange);
    },

    componentWillUnmount: function() {
        StoreConsole.removeChangeListener(this.onConsoleChange);
    }

});
module.exports = ActionsSubPanelInner;
