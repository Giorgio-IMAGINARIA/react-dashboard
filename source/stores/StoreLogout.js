var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var logoutFlag = false;


function handleAction(Action) {
    if (Action.type === 'set_logout_flag') {
        logoutFlag = Action.parameter;
        emitChange();
    };
}

function emitChange() {
    StoreLogout.emit('change');
}

var StoreLogout = assign({}, EventEmitter.prototype, {

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },

    getLogoutFlag: function() {
        return logoutFlag;
    }

});

StoreLogout.dispatchToken = AppDispatcher.register(handleAction);

module.exports = StoreLogout;
