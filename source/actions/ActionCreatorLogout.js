var AppDispatcher = require('../dispatcher/AppDispatcher');

function setLogoutFlag(parameter) {

    var Action = {
        type: 'set_logout_flag',
        parameter: parameter
    };

    AppDispatcher.dispatch(Action);
// console.log('in action', parameter);
}

module.exports = {
    setLogoutFlag: setLogoutFlag
};
