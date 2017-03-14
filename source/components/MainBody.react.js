"use strict";
import Radium from 'radium';
var StyleRoot = require('radium/lib/components/style-root');
var React = require('react');
// var ScreenSlice = Radium(require('./ScreenSlice.react'));
var ResourcesPanel = require('./ResourcesPanel.react');
var CallsPanel = require('./CallsPanel.react');
var ActionsPanel = require('./ActionsPanel.react');

var MainBody = React.createClass({
  screenSliceStyle : {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: '1'
  },
  panelWrapStyle : {
      height: '704px',
      width: '432px',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'initial'
  },
  mainBodywrapStyle : {
      display: 'flex',
      '@media (min-width: 1350px)': {
          height: '100%'
      },
      '@media (max-width: 1349px)': {
          flexDirection: 'column'
      }
  },

    render: function() {
        return (
            <StyleRoot style={this.mainBodywrapStyle}>
                <div style={this.screenSliceStyle}>
                    <div style={this.panelWrapStyle}>
                        <ResourcesPanel/>
                    </div>
                </div>
                <div style={this.screenSliceStyle}>
                    <div style={this.panelWrapStyle}>
                        <CallsPanel/>
                    </div>
                </div>
                <div style={this.screenSliceStyle}>
                    <div style={this.panelWrapStyle}>
                        <ActionsPanel/>
                    </div>
                </div>
            </StyleRoot>
        );
    }
});

module.exports = MainBody;
