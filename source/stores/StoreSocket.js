var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var socket = null;

function setSocket(parameter) {
  socket = parameter;
}

function handleAction(Action) {

  if (Action.type === 'set_socket') {
    setSocket(Action.newSocket);
    emitChange();
  }
}

function emitChange() {
  StoreSocket.emit('change');
}

var StoreSocket = assign({}, EventEmitter.prototype, {

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  getSocket: function() {
    return socket;
  }

});

StoreSocket.dispatchToken = AppDispatcher.register(handleAction);

module.exports = StoreSocket;
