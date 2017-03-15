import React from 'react';
var StyleRoot = require('radium/lib/components/style-root');
//Stores
var StoreLoginDetailsState = require('../stores/StoreLoginDetailsState');
//React Modules
var NavigationBlock = require('./NavigationBlock.react');
var LoginBlock = require('./LoginBlock.react');

var appBarStyle = {
    borderBottom: '1px solid #191919',
    display: 'flex',
    justifyContent: 'center',
    height: '29px',
    backgroundColor: '#1e1e1e'
};

var titleBarStyleBig = {
    '@media (max-width: 1199px)': {
        display: 'none'
    },
    fontFamily: 'Noto Sans, sans-serif',
    color: '#8f9498',
    fontWeight: '100',
    fontSize: '18px',
    margin: '0px'
};
var titleBarStyleSmall = {
    '@media (min-width: 1200px)': {
        display: 'none'
    },
    fontFamily: 'Noto Sans, sans-serif',
    color: '#8f9498',
    fontWeight: '100',
    fontSize: '18px',
    margin: '0px'
};
var titleBarWrapStyle = {
  display: 'flex',
  width: '34%',
  height: 'inherit',
  alignItems: 'center',
  justifyContent: 'center'
};

var MainBar = React.createClass({
    getInitialState: function() {
        return {navigationBlock: null, loginBlock: null};
    },
    onLoginDetailsChange: function() {
        if (StoreLoginDetailsState.getDetails().token) {
            this.setState({
                // navigationBlock: <NavigationBlock/>,
                // following only for test (comment above);
                navigationBlock: NavigationBlock(),
                // loginBlock: <LoginBlock/>
                // following only for test (comment above);                
                loginBlock: LoginBlock()
            });
        } else {
            this.setState({navigationBlock: null, loginBlock: null});
        };
    },
    render: function() {
        return (
            <StyleRoot style={appBarStyle}>
                {this.state.navigationBlock}
                <div style={titleBarWrapStyle}>
                    <p style={titleBarStyleBig}>
                        {'REACT DASHBOARD'}
                    </p>
                    <p style={titleBarStyleSmall}>
                        {this.props.text}
                    </p>
                </div>
                {this.state.loginBlock}
            </StyleRoot>
        );
    },
    componentDidMount: function() {
        StoreLoginDetailsState.addChangeListener(this.onLoginDetailsChange);
    },

    componentWillUnmount: function() {
        StoreLoginDetailsState.removeChangeListener(this.onLoginDetailsChange);
    }

});

module.exports = MainBar;
