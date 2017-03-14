"use strict";
var React = require('react');
//Stores
//Library Modules

var _ = require('lodash');

var secondPanelWrap = {
    height: '704px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
};

var shortPanelsWrap = {
    borderTop: '2px solid #4a4a4a',
    borderBottom: '2px solid #4a4a4a',
    height: '700px',
    overflow: 'auto'
};
var subpanels = [];
var CallsPanel = React.createClass({
    getInitialState: function() {
        return {subPanelsArray: []};
    },

    render: function() {
        return (
            <div style={secondPanelWrap}>
                <div style={shortPanelsWrap}>
                </div>
            </div>
        );
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function() {
    }
});

module.exports = CallsPanel;
