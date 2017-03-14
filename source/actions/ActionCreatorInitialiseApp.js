var AppDispatcher = require('../dispatcher/AppDispatcher');

function initialiseAppActionCreator() {

    var Action = {
        type: 'initialise_app'
    };

    AppDispatcher.dispatch(Action);
}
function resetAppActionCreator() {

    var Action = {
        type: 'reset_app'
    };

    AppDispatcher.dispatch(Action);
}


module.exports = {
    initialiseAppActionCreator: initialiseAppActionCreator,
    resetAppActionCreator : resetAppActionCreator
};
