var AppDispatcher = require('../dispatcher/AppDispatcher');

function setApiAddress(parameter) {

    var Action = {
        type: 'set_api_address',
        parameter: parameter
    };

    AppDispatcher.dispatch(Action);
}

module.exports = {
    setApiAddress: setApiAddress
};
