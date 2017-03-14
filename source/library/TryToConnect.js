var io = require('socket.io-client');
// Stores
var StoreAddress = require('../stores/StoreAddress');
//Actions
var ActionCreatorSetLoginDetails = require('../actions/ActionCreatorSetLoginDetails');
var ActionCreatorSetSocket = require('../actions/ActionCreatorSetSocket');
//Library
var HandleLoginServer = require('./HandleLoginServer');
function sendDetails(loginOutcome) {
    return new Promise(
        function (resolve, reject) {
            var address;
            var loginInfo;
            var addressRoot = StoreAddress.getAddressRoot();
            switch (loginOutcome[2]) {
                case 1:
                    {
                        address = addressRoot + "/auth/local";
                        loginInfo = {
                            identifier: loginOutcome[0],
                            password: loginOutcome[1]
                        }
                    }
                    break;
                case 2:
                    {
                        address = addressRoot + "/auth/ldapauth";
                        loginInfo = {
                            username: loginOutcome[0],
                            password: loginOutcome[1]
                        };
                    }
                    break;
                default:
                    throw "Login.sendDetails() does not recognize a loginOutcome number ";
            };

            // skip the login:

            // address = addressRoot + "/auth/local";
            // loginInfo = {
            //     identifier: 'betty',
            //     password: 'Pa55w0rd'
            // };

            // address = addressRoot + "/auth/local";
            // loginInfo = {
            //     identifier: 'giorgio',
            //     password: 'Pa55w0rd'
            // };

            // address = addressRoot + "/auth/local";
            // loginInfo = {
            //     username: 'apiuser1',
            //     password: 'Pa55w0rd'
            // };

            // console.log('address', address);
            // console.log('loginInfo', loginInfo);
            // console.log('addressRoot', addressRoot);

            tryToConnect(address, loginInfo, addressRoot).then(function (value) {
                console.log('value from sendDetails: ', value);
                resolve(value);
            })
                .catch(function (error) {
                    console.log('error from sendDetails: ', error);
                    reject(error);
                });
        }
    );
}

function tryToConnect(address, loginInfo, addressRoot) {
    return new Promise(
        function (resolve, reject) {




            var loginDetailsValidated = {
                passValueValidated: loginInfo.password,
                connectionValueValidated: address,
                token: 'your token'
            }
            if (address.slice(-1) === 'h') {
                loginDetailsValidated.userValueValidated = loginInfo.username;
            } else if (address.slice(-1) === 'l') {
                loginDetailsValidated.userValueValidated = loginInfo.identifier;
            }
            HandleLoginServer.SendToServer(loginDetailsValidated).then(function (value) {
                ActionCreatorSetLoginDetails.setUserValueActionCreator(loginDetailsValidated);
                resolve('Connected from TRYTOCONNECT.TRYTOCONNECT');
            })
                .catch(function (error) {
                    reject('notConnected from TRYTOCONNECT.TRYTOCONNECT');
                });
        }
    );
}

module.exports = {
    sendDetails: sendDetails
};
