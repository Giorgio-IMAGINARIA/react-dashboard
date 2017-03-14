var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var sendStream = [];
var receiveStream = [];
var jsonTyped = '';

function sendToAPI(parameter) {
    sendStream.unshift(parameter);
};

function receiveFromAPI(parameter) {
    receiveStream.unshift(parameter);
};

function storeTypedJson(parameter) {
    jsonTyped = parameter;
};

function clearConsolePanel(parameter) {
    switch (parameter) {
        case 'sen':
            {
                sendStream=[];
            }
            break;
        case 'rec':
            {
              receiveStream = [];
            }
            break;
        case 'ty':
            {
              jsonTyped = '';
            }
            break;
    };
};

function handleAction(Action) {
    switch (Action.type) {
        case 'send_to_api':
            {
                sendToAPI(Action.parameter);
                emitChange();
            }
            break;
        case 'receive_from_api':
            {
                receiveFromAPI(Action.parameter);
                emitChange();
            }
            break;
        case 'send_json_to_api':
            {
                storeTypedJson(Action.parameter);
                emitChange();
            }
            break;
        case 'clear_console_panel':
            {
                clearConsolePanel(Action.parameter);
                emitChange();
            }
            break;
    };
}

function emitChange() {
    StoreConsole.emit('change');
}

var StoreConsole = assign({}, EventEmitter.prototype, {

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },

    getSendStream: function() {
        return sendStream;
    },
    getReceiveStream: function() {
        return receiveStream;
    },
    getJsonTyped: function() {
        return jsonTyped;
    }

});

StoreConsole.dispatchToken = AppDispatcher.register(handleAction);

module.exports = StoreConsole;
