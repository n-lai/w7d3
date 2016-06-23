const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');

const _keys = [];

const KeyStore = new Store(AppDispatcher);

KeyStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case "PLAY_KEY":
      if (_keys.indexOf(payload.noteName) === -1)
      {
        _keys.push(payload.noteName);
      }
      KeyStore.__emitChange();
      break;
    case "RELEASE_KEY":
      const idx = _keys.indexOf(payload.noteName);
      _keys.splice(idx, 1);
      KeyStore.__emitChange();
      break;
  }
};

KeyStore.all = function() {
  return _keys.slice();
};

module.exports = KeyStore;
