"use strict";
import Radium from 'radium';
var Style = Radium.Style;
import StyleRoot from 'radium/lib/components/style-root';
import React from 'react';
var _ = require('lodash');
import {browserHistory} from 'react-router'
//Action Creators
var ActionCreatorLogout = require('../actions/ActionCreatorLogout');
//Material UI Modules
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RightArrow from 'material-ui/svg-icons/navigation/chevron-right';
import Snackbar from 'material-ui/Snackbar';
//Library Components
var TryToConnect = require('../library/TryToConnect');
var TweetUtils = require('../library/TweetUtils');
//Stores
var StoreLogout = require('../stores/StoreLogout');

var loginVerticalText = {
    transform: 'rotate(-90deg)',
    transformOrigin: 'left bottom 0px',
    width: '375px',
    color: '#fff',
    fontSize: '20pt',
    fontWeight: '300',
    position: 'relative',
    left: '207px',
    top: '310px',
    letterSpacing: '1pt',
    '@media (max-width: 767px)': {
        width: '200px',
        fontSize: '12pt',
        left: '111px',
        top: 'calc(50% + 10px)'
    }
};
var styleWrap = {
    '@media (max-width: 767px)': {
        width: '100%',
        height: '100%'
    }
};
var paperStyle = {
    textAlign: 'center',
    display: 'inline-block',
    width: '400px',
    height: '500px',
    // '@media (max-width: 767px)': {
    //     width: '100%',
    //     height: '100%',
    //     top: '0px'
    // }
};
var loginWrapStyle = {
    display: 'flex',
    height: 'inherit'
};
var leftDiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '130px',
    backgroundColor: '#25AAE1',
    borderRight: '0.1pt solid #d0d0d0',
    height: 'inherit',
    '@media (max-width: 767px) and (orientation: portrait)': {
        width: '52px'
    }
};
var rightDiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '270px',
    height: 'inherit',
    '@media (max-width: 767px)': {
        width: '100%',
        height: 'inherit'
    }
};
var reactLogo = {
    width: '100px',
    height: '100px',
    paddingTop: '22px',
    '@media (max-width: 767px)': {
        width: '50px',
        height: '50px'
    },
    '@media (max-width: 767px) and (orientation: landscape)': {
        paddingTop: '5px'
    }
};
var reactText = {
    width: '207px',
    height: '100px',
    paddingTop: '22px',
    '@media (max-width: 767px)': {
        width: '104px',
        height: '50px'
    },
    '@media (max-width: 667px) and (orientation: landscape)': {
        visibility: 'hidden',
        position: 'fixed',
        zIndex: '-10'
    }
};
var lowerWrap = {
    width: '90%',
    height: 'calc(100% - 120px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    '@media (max-width: 767px)': {
        height: 'calc(100% - 75px)'
    },
    '@media (max-width: 667px) and (orientation: landscape)': {
        height: '100%'
    }
}
var loginElementStyle = {
    marginTop: '10px',
    // '@media (max-width: 767px) and (orientation: landscape)': {
    //     marginTop: '0px',
    //     marginBottom: '0px',
    //     paddingTop: '10px',
    //     lineHeight: '48px'
    // }
};
var loginElementInputStyle = {
    // '@media (max-width: 767px) and (orientation: landscape)': {
    //     marginTop: '0px',
    //     marginBottom: '0px'
    // }
};
var passLoginElementStyle = {
    marginTop: '10px',
    marginBottom: '10px',
    // '@media (max-width: 767px) and (orientation: landscape)': {
    //     marginTop: '0px',
    //     marginBottom: '0px',
    //     paddingTop: '10px',
    //     lineHeight: '48px'
    // }
};
var passElementInputStyle = {
    // '@media (max-width: 767px) and (orientation: landscape)': {
    //     marginTop: '0px',
    //     marginBottom: '0px'
    // }
};
var selectLoginElement = {
    marginTop: '10px',
    textAlign: 'left'
};
var fieldsWrap = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
};
var floatingLabelStyle = {
    color: '#25aae1'
};
var underlineFocusStyle = {
    borderColor: '#25aae1'
};
var selectIconStyle = {
    fill: "#25aae1"
};
var snackBarStyle = {
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif'
};

var loginOutcome = [null, null, 1];

var Login = React.createClass({
    getInitialState: function() {
        return {open: false, userValue: '', passValue: '', connectionValue: 1, disableButton: true};
    },
    handleLoginError: function() {
        this.setState({open: true, userValue: '', passValue: '', disableButton: true});
        loginOutcome[0] = null;
        loginOutcome[1] = null;
    },
    handleRequestClose: function() {
        this.setState({open: false});
    },
    setInputValue: function(fieldName, fieldValue) {
        if (fieldName === 'user') {
            this.setState({userValue: fieldValue});

        } else if (fieldName === 'pass') {
            this.setState({passValue: fieldValue});

        } else if (fieldName === 'connection') {
            this.setState({connectionValue: fieldValue});

        }
    },
    checkEmptyLoginFields: function() {
        if (loginOutcome[0] === null || loginOutcome[1] === null || loginOutcome[2] === null) {
            // login uncompleted
            return true;
        } else {
            if ((!loginOutcome[0].match(/\S/)) || (!loginOutcome[1].match(/\S/)) || (loginOutcome[2] === null)) {
                // login uncompleted
                return true;
            } else {
                // login completed
                return false;
            }
        }
    },
    handleChangeSelect: function(event, index, connectionValue) {
        this.setInputValue('connection', connectionValue);
        loginOutcome[2] = connectionValue;
        this.setState({disableButton: this.checkEmptyLoginFields()});
    },
    handleChangeText: function(event) {
        var fieldChanged = event.target.name;
        var fieldValue = event.target.value;
        if (fieldChanged === 'user') {
            loginOutcome[0] = fieldValue;
        } else if (fieldChanged === 'pass') {
            loginOutcome[1] = fieldValue;
        }
        this.setInputValue(fieldChanged, fieldValue);
        this.setState({disableButton: this.checkEmptyLoginFields()});
    },
    connectSuccess: function() {
        console.log('STEP 3 connect success from login!!!');
        this.context.router.push('/dashboard');
    },
    validateDetails: function(loginOutcome, handleLoginError) {
        TryToConnect.sendDetails(loginOutcome).then(this.connectSuccess).catch(function(error) {
            console.log('ERROR!!!', error);
            handleLoginError();
        });
    },
    contextTypes: {
        router: React.PropTypes.object
    },
    componentWillMount: function() {
        if (StoreLogout.getLogoutFlag()) {
            ActionCreatorLogout.setLogoutFlag(false);
        } else {
            $.ajax({url: '/credentialsDetails'}).fail(function(data) {}).done(function(data) {
                // console.log("Login Details loaded: ", data);
                browserHistory.replace('/dashboard');
            });
        }

    },
    render: function() {

        return (
            <StyleRoot style={styleWrap}>
                <Style rules={{
                    body: {
                        height: '100%'
                    }
                }}/>
                <Paper style={paperStyle} zDepth={2}>
                    <div style={loginWrapStyle}>
                        <div style={leftDiv}>
                            <p style={loginVerticalText}>REACT DASHBOARD</p>
                        </div>
                        <div style={rightDiv}>
                            <div style={lowerWrap}>
                                <div style={fieldsWrap}>
                                    <TextField value={this.state.userValue} fullWidth={true} style={loginElementStyle} inputStyle={loginElementInputStyle} name='user' hintText="Username Field" floatingLabelText="Username" floatingLabelStyle={floatingLabelStyle} underlineFocusStyle={underlineFocusStyle} onChange={this.handleChangeText}/>
                                    <TextField value={this.state.passValue} fullWidth={true} style={passLoginElementStyle} inputStyle={passElementInputStyle} name='pass' hintText="Password Field" floatingLabelText="Password" floatingLabelStyle={floatingLabelStyle} underlineFocusStyle={underlineFocusStyle} type="password" onChange={this.handleChangeText}/>
                                    <SelectField fullWidth={true} style={selectLoginElement} value={this.state.connectionValue} onChange={this.handleChangeSelect} floatingLabelText="Login Mode" floatingLabelStyle={floatingLabelStyle} iconStyle={selectIconStyle}>
                                        <MenuItem value={1} primaryText="Local"/>
                                        <MenuItem value={2} primaryText="LDAP"/>
                                    </SelectField>
                                </div>
                                <FloatingActionButton disabled={this.state.disableButton} backgroundColor='#25AAE1' onMouseDown={this.validateDetails.bind(this, loginOutcome, this.handleLoginError)}>
                                    <RightArrow/>
                                </FloatingActionButton>
                            </div>
                        </div>
                    </div>
                </Paper>
                <Snackbar style={snackBarStyle} open={this.state.open} message={'Wrong login credentials. Please type them again'} autoHideDuration={4000} onRequestClose={this.handleRequestClose}/>
            </StyleRoot>
        );
    }

});

module.exports = Radium(Login);
