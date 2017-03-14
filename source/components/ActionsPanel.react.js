"use strict";
var React = require('react');
var ActionsSubPanel = require('./ActionsSubPanel.react');

var ActionPanel = React.createClass({
  spaceStyle : {
      width: '100%',
      height: '20px'
  },
  shortPanelsWrap : {
      borderTop: '2px solid #4a4a4a',
      borderBottom: '2px solid #4a4a4a',
      height: '700px',
      overflow: 'auto'
  },
  secondPanelWrap : {
      height: '704px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
  },
    render: function() {
        return (
            <div style={this.secondPanelWrap}>
                <div style={this.shortPanelsWrap}>
                    <ActionsSubPanel sbpantype={'sen'}/>
                    <div style={this.spaceStyle}/>
                    <ActionsSubPanel sbpantype={'rec'}/>
                    <div style={this.spaceStyle}/>
                    <ActionsSubPanel sbpantype={'ty'}/>
                </div>
            </div>
        );
    }
});

module.exports = ActionPanel;
