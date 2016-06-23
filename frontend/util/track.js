const Actions = require ("../actions/keyactions.js");
const Note = require("../util/note.js");

const Track = function(options) {
  this.name = options['name'];
  this.roll = options['roll'] || [];
};

Track.prototype.startRecording = function() {
  console.log("strap");
  this.roll = [];
  this.time = Date.now();
};

Track.prototype.addNotes = function(notes) {
  let timediff = (Date.now() - this.time);

  const options = {
    "timeslice": timediff,
    "notes": notes
  };

  this.roll.push(options);
};

Track.prototype.stopRecording = function () {
  console.log("strop");
  this.addNotes([]);
};

Track.prototype.play = function () {
  if(this.interval){
    return;
  } else {
    let playbackStartTime = Date.now();
    let currentNote = 0;
    const intervalID = setInterval(callback.bind(this), 10);
    function callback(){
      if(Date.now() - playbackStartTime > this.roll[currentNote].timeslice){
        this.roll[currentNote].notes.forEach( note => {
          Actions.keyReleased(note);
        });

        currentNote++;
        if(currentNote >= this.roll.length - 1){

          clearInterval(intervalID);
        }
        this.roll[currentNote].notes.forEach( note => {
          Actions.keyPressed(note);
        });
      }
    }
  }
};

module.exports = Track;
