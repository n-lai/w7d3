const KeyActions = require('../actions/keyactions.js');

const Mapping = {
  65: 'C5',
  83: 'D5',
  68: 'E5',
  70: 'F5',
  74: 'G5',
  75:'A5',
  76:'B5',
  186:'C6',

};

const keyListeners = function() {
  $(document).on('keydown', (e) => {
    if (Object.keys(Mapping).map(numStr => {
      return parseInt(numStr);
    }).includes(e.keyCode)) {
      KeyActions.keyPressed(Mapping[e.keyCode]);
    }
  });

  $(document).on('keyup', (e) => {
    if (Object.keys(Mapping).map(numStr => {
      return parseInt(numStr);
    }).includes(e.keyCode)) {
      KeyActions.keyReleased(Mapping[e.keyCode]);
    }
  });
};

module.exports = window.keyListeners = keyListeners;
