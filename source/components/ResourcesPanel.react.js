"use strict";
var React = require('react');
var _ = require('lodash');
//React modules
var ResourcesSubPanel = require('./ResourcesSubPanel.react');
//Stores
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
var spaceStyle = {
    width: '100%',
    height: '20px'
};

var ResourcesPanel = React.createClass({
    render: function() {
        return (
            <div style={secondPanelWrap}>
                <div style={shortPanelsWrap}>
                    <ResourcesSubPanel res={'CA'}/>
                </div>
            </div>
        );
    },
    componentDidMount: function() {
    },

    componentWillUnmount: function() {
    }
});

module.exports = ResourcesPanel;
