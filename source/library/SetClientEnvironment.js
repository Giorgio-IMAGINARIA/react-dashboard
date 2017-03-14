//Actions
var ActionCreatorSetApiAddress = require('../actions/ActionCreatorSetApiAddress');



function setApiAddress() {
    $.ajax({
        url: '/apiAddress'
    }).fail(function(data) {
        return false;
    }).done(function(data) {
        ActionCreatorSetApiAddress.setApiAddress(data.apiAddress);
    });
}

module.exports = {
    setApiAddress: setApiAddress
};
