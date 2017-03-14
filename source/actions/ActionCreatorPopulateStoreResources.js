var AppDispatcher = require('../dispatcher/AppDispatcher');

function populateResourcesActionCreator(newResource) {
  var populateResourcesAction = {
    type: 'populate_resources',
    newResource: newResource
  };
  AppDispatcher.dispatch(populateResourcesAction);
}

module.exports = {
  populateResourcesActionCreator: populateResourcesActionCreator
};
