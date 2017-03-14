var AppDispatcher = require('../dispatcher/AppDispatcher');

function setUserValueActionCreator(newUserValue) {

  var setUserValueAction = {
    type: 'set_userValue',
    newUserValue: newUserValue
  };
  AppDispatcher.dispatch(setUserValueAction);

}



module.exports = {
  setUserValueActionCreator: setUserValueActionCreator
};
