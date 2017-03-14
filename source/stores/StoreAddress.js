var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var addressRoot = null;

function setApiAddress(parameter) {
  addressRoot = parameter;
}

function handleAction(Action) {
  if (Action.type === 'set_api_address') {
    setApiAddress(Action.parameter);
    emitChange();
  }
}
function emitChange() {
  StoreAddress.emit('change');
}

var StoreAddress = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },
  getAddressRoot: function() {
    return addressRoot;
  }
});
StoreAddress.dispatchToken = AppDispatcher.register(handleAction);
module.exports = StoreAddress;
