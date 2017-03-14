var React = require('react');
import Radium from 'radium';
var StyleRoot = require('radium/lib/components/style-root');
//Material UI Modules
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
//Stores
var StoreLoginDetailsState = require('../stores/StoreLoginDetailsState');
//Action Creators
var ActionCreatorSetLoginDetails = require('../actions/ActionCreatorSetLoginDetails');
var ActionCreatorInitialiseApp = require('../actions/ActionCreatorInitialiseApp');
var ActionCreatorSetSocket = require('../actions/ActionCreatorSetSocket');
var ActionCreatorLogout = require('../actions/ActionCreatorLogout');

//Library
var HandleLoginServer = require('../library/HandleLoginServer');

var logoutRootStyle = {
    height: 'inherit',
    width: '33%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end'
};
var logoutButtonWrapStyle = {
    padding: '0px 20px',
    height: 'inherit',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer'
};
var avatarNameStyle = {
    color: '#8f9498',
    margin: '0px',
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '12px',
    fontWeight: '100',
    letterSpacing: '1pt'
};
var avatarIconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    borderRadius: '10px',
    borderColor: '#323d45',
    borderStyle: 'solid',
    borderWidth: '1px',
    backgroundColor: '#1D212A'
};
var avatarInitialStyle = {
    color: '#25aae1',
    margin: '0px',
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '12px'
};
var menuItemStyle = {
    fontFamily: 'Noto Sans, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

var avatarNameWrapStyle = {
    marginRight: '10px',
    height: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};
var iconMenuStyle = {
    backgroundColor: '#1D212A',
    height: 'inherit'
};

var LoginBlock = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    logoutUser: function() {
        var loginDetailsVoid = {
            userValue: '',
            passValue: '',
            connectionValue: '',
            token: null
        }

        ActionCreatorSetLoginDetails.setUserValueActionCreator(loginDetailsVoid);
        ActionCreatorInitialiseApp.resetAppActionCreator();
        ActionCreatorSetSocket.setSocketActionCreator(null);
        HandleLoginServer.SendToServer(loginDetailsVoid);
        ActionCreatorLogout.setLogoutFlag(true);

        this.context.router.push('/login');
    },
    iconMenuAction: {
        name: 'leave'
    },
    mouseHoverIconMenu: function(parameter) {
        this.iconMenuAction.name = parameter;
        this.forceUpdate();
    },
    render: function() {
        switch (this.iconMenuAction.name) {
            case 'enter':
                iconMenuStyle.backgroundColor = '#323d45';
                avatarNameStyle.color = '#fff'
                break;
            case 'leave':
                iconMenuStyle.backgroundColor = '#1D212A';
                avatarNameStyle.color = '#8f9498'
                break;
            default:
                throw "LoginBlock.render() does not recognize a handsetType name ";
        };
        return (
            <StyleRoot style={logoutRootStyle}>
                <IconMenu onMouseEnter={this.mouseHoverIconMenu.bind(this, 'enter')} onMouseLeave={this.mouseHoverIconMenu.bind(this, 'leave')} style={iconMenuStyle} iconButtonElement={< div style = {
                    logoutButtonWrapStyle
                } > <div style={avatarNameWrapStyle}>
                    <p style={avatarNameStyle}>{StoreLoginDetailsState.getDetails().userValue}</p>
                </div> <div style = {
                    avatarIconStyle
                } > <p style={avatarInitialStyle}>{StoreLoginDetailsState.getDetails().userValue.charAt(0).toUpperCase()}</p> </div> </div >} anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'top'
                }} targetOrigin={{
                    horizontal: 'right',
                    vertical: 'top'
                }}>
                    <MenuItem style={menuItemStyle} primaryText="Sign Out" onTouchTap={this.logoutUser}/>
                </IconMenu>
            </StyleRoot>
        );
    }
});

module.exports = LoginBlock;
