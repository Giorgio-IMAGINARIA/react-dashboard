var React = require('react');
import Radium from 'radium';
var StyleRoot = require('radium/lib/components/style-root');
import NavLink from './NavLink.react';

var NavigationBlock = React.createClass({
  appBarNavRootStyle : {
      width: '33%',
      height: 'inherit',
      alignItems: 'center',
      display: 'flex'
  },
    appBarNavRootStyle : {
        width: '33%',
        height: 'inherit',
        alignItems: 'center',
        display: 'flex'
    },
    appBarNavStyle : {
        width: '100%',
        height: 'inherit',
        alignItems: 'center',
        display: 'flex'
    },
    navButtonLabelStyle : {
        fontSize: '12px',
        letterSpacing: '1pt',
        fontFamily: 'Noto Sans, sans-serif',
        fontWeight: '100',
        textTransform: 'capitalize',
        margin: '0px 10px'
    },
    navButtonWrapStyle : {
        border: 'none',
        cursor: 'pointer',
        height: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    render: function() {
        return (
            <StyleRoot style={this.appBarNavRootStyle}>
                <nav id="mainNav" style={this.appBarNavStyle}>
                  <NavLink to="/dashboard">
                    <button key={0} style={this.navButtonWrapStyle}>
                        <p style={this.navButtonLabelStyle}>Dashboard</p>
                    </button>
                  </NavLink>
                    <NavLink to="/help">
                    <button key={1} style={this.navButtonWrapStyle}>
                        <p style={this.navButtonLabelStyle}>Help</p>
                    </button>
                  </NavLink>
                </nav>
            </StyleRoot>
        );
    }
});

module.exports = NavigationBlock;
