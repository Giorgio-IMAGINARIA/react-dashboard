//React
import React from 'react';
//Radium
import Radium from 'radium';
var Style = Radium.Style;
var StyleRoot = require('radium/lib/components/style-root');
//Material UI Modules
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//React Modules
var MainBar = require('../components/MainBar.react');

var mainWrap = {
    width: '100%',
    height: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};
var appWrap = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: 'inherit',
    height: 'inherit'
};
var containerStyle = {
    display: 'flex',
    height: 'calc(100% - 30px)',
    justifyContent: 'center',
    alignItems: 'center'
};

var App = React.createClass({
    render: function() {
        return (
            <StyleRoot style={mainWrap}>
                <Style rules={{
                    html: {
                        height: '100%'
                    },
                    body: {
                        margin: '0px',
                        backgroundColor: '#1e242b',
                        height: '100%'
                    }
                }}/>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div style={appWrap}>
                        <MainBar/>
                        <div style={containerStyle}>
                            {this.props.children}
                        </div>
                    </div>
                </MuiThemeProvider>
            </StyleRoot>
        );
    }
});

module.exports = App;
