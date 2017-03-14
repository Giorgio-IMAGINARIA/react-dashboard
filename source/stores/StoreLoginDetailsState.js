var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var details = {
  userValue:null,
  passValue: null,
  connectionValue: null,
  token: null
};

function setUserDetails(receivedUserDetails) {
  details.userValue = receivedUserDetails.userValueValidated;
  details.passValue = receivedUserDetails.passValueValidated;
  details.connectionValue = receivedUserDetails.connectionValueValidated;
  details.token = receivedUserDetails.token;
}

function handleChangeUserValueAction(setUserValueAction) {
  if (setUserValueAction.type === 'set_userValue') {
    setUserDetails(setUserValueAction.newUserValue);
    emitChange();
  }
}

function emitChange() {
  StoreLoginDetailsState.emit('change');
}

var StoreLoginDetailsState = assign({}, EventEmitter.prototype, {

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },
  getDetails: function() {
    return details;
  }

});

StoreLoginDetailsState.dispatchToken = AppDispatcher.register(handleChangeUserValueAction);

module.exports = StoreLoginDetailsState;
