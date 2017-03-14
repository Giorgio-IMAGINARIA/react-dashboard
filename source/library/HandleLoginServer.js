// Stores
var StoreSocket = require('../stores/StoreSocket');
//Actions
var ActionCreatorModifyConsole = require('../actions/ActionCreatorModifyConsole');

function SendToServer(loginDetails) {
    return new Promise(
        function(resolve, reject) {
            var stringifiedDetails = JSON.stringify(loginDetails);
            var addressCredentialsExpress = '/credentialsDetails';
            $.ajax({
                url: addressCredentialsExpress,
                crossDomain: "true",
                method: "POST",
                data: stringifiedDetails,
                contentType: 'application/json',
                dataType: 'json'
            }).fail(function(data) {
                console.log('FAIL FROM HANDLELOGINSERVER.SENDTOSERVER');
                console.log('Send Socket Error: ' + data.status + '\r\n' + data.statusText);
                reject('notConnected from HANDLELOGINSERVER.SENDTOSERVER');
            }).done(function(data) {
                console.log('STEP 2 SUCCESS FROM HANDLELOGINSERVER.SENDTOSERVER');
                console.log('Send Socket Success: ', data);
                resolve('connected from HANDLELOGINSERVER.SENDTOSERVER');
            });
        }
    )
}

function GetFromServer() {
    $.ajax({
        url: '/credentialsDetails'
    }).fail(function(data) {
        console.log('Login Details Error: ' + data.status + '\r\n' + data.statusText);
        return false;
    }).done(function(data) {
        // console.log("Login Details loaded: ", data);
        return true;
    });
}

module.exports = {
    SendToServer: SendToServer,
    GetFromServer: GetFromServer
};
