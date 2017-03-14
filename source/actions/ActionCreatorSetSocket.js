var AppDispatcher = require('../dispatcher/AppDispatcher');

function setSocketActionCreator(parameter) {

  var Action = {
    type: 'set_socket',
    newSocket: parameter
  };

  AppDispatcher.dispatch(Action);

}

module.exports = {
  setSocketActionCreator: setSocketActionCreator
};
