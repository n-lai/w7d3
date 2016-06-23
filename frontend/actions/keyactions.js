const AppDispatcher = require("../dispatcher/dispatcher.js");

module.exports = {
  keyPressed: function(note) {
    AppDispatcher.dispatch({
      actionType: "PLAY_KEY",
      noteName: note
    });
  },

  keyReleased: function(note) {
    AppDispatcher.dispatch({
      actionType: "RELEASE_KEY",
      noteName: note
    });
  }
};
