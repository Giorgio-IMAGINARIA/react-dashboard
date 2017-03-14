var AppDispatcher = require('../dispatcher/AppDispatcher');

function sendToAPIActionCreator(parameter) {

    var Action = {
        type: 'send_to_api',
        parameter: parameter
    };

    AppDispatcher.dispatch(Action);
}

function receiveFromAPIActionCreator(parameter) {

    var Action = {
        type: 'receive_from_api',
        parameter: parameter
    };

    AppDispatcher.dispatch(Action);
}
function sendJsonToAPIActionCreator(parameter) {

    var Action = {
        type: 'send_json_to_api',
        parameter: parameter
    };

    AppDispatcher.dispatch(Action);
}
function clearPanelActionCreator(parameter) {

    var Action = {
        type: 'clear_console_panel',
        parameter: parameter
    };

    AppDispatcher.dispatch(Action);
}


module.exports = {
    sendToAPIActionCreator: sendToAPIActionCreator,
    receiveFromAPIActionCreator: receiveFromAPIActionCreator,
    sendJsonToAPIActionCreator: sendJsonToAPIActionCreator,
    clearPanelActionCreator: clearPanelActionCreator
};
