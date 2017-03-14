var AppDispatcher = require('../dispatcher/AppDispatcher');

function populateStoreCurrentCalls(parameter) {
// console.log("LIST OF CALLS", parameter);
  var Action = {
    type: 'populate_current_calls',
    parameter: parameter
  };

  AppDispatcher.dispatch(Action);
}

module.exports = {
  populateStoreCurrentCalls: populateStoreCurrentCalls
};
