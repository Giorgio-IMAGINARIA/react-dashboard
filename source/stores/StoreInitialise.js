var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var initialised = false;


function handleAction(Action) {
  switch (Action.type) {
      case 'initialise_app':
          {
            initialised = true;
            emitChange();
          }
          break;
      case 'reset_app':
          {
            initialised = false;
            emitChange();
          }
          break;

  };
}

function emitChange() {
  StoreInitialise.emit('change');
}

var StoreInitialise = assign({}, EventEmitter.prototype, {

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },

  getInitialised: function() {
    return initialised;
  }

});

StoreInitialise.dispatchToken = AppDispatcher.register(handleAction);

module.exports = StoreInitialise;
