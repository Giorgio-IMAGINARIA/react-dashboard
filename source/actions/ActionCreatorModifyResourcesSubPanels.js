var AppDispatcher = require('../dispatcher/AppDispatcher');

function toggleDynamicLineMembers(parameter) {

    var Action = {
        type: 'toggle_dynamic_line_member',
        parameter: parameter
    };
    console.log('toggle_dynamic_line_member', parameter);

    AppDispatcher.dispatch(Action);
}

module.exports = {
    toggleDynamicLineMembers: toggleDynamicLineMembers
};
