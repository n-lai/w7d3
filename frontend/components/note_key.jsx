const React = require("react");
const Note = require("../util/note.js");
const KeyStore = require("../stores/keystore.js");
const TONES = require("../constants/tones.js");

const NoteKey = React.createClass({
  getInitialState() {
    return { played: false };
  },

  componentDidMount() {
    this.note = new Note(TONES[this.props.noteName]);
    this.listener = KeyStore.addListener(this.handleKey);
  },

  handleKey() {
    if (KeyStore.all().indexOf(this.props.noteName) !== -1)
    {
      this.note.start();
      this.setState( { played: true} );
    } else {
      this.note.stop();
      this.setState( { played: false} );
    }
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  render() {
    let pressed = "";
    if (this.state.played) {
      pressed = "pressed";
    }
    return <div className={'note ' + pressed}>{this.props.noteName}</div>;
  }


});

module.exports = NoteKey;
