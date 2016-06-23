const React = require("react");
const NoteKey = require('./note_key.jsx');
const KeyListeners = require("../util/add_key_listeners.js");
const TONES = require("../constants/tones.js");
const Recorder = require("./recorder.jsx");

const Organ = React.createClass({
  componentDidMount() {
    KeyListeners();
  },

  render() {
    const notes = Object.keys(TONES).map(noteName => {
      return (<NoteKey key={noteName} noteName={noteName} />);
    });

    return(
      <div className='organ'>
        {notes}
        <Recorder />
      </div>
    );
  }
});

module.exports = Organ;
