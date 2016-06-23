const React = require("react");
const Track = require('../util/track.js');
const Store = require('../stores/keystore.js');

const Recorder = React.createClass({
  getInitialState(){
    return {
      recording: false,
      track: new Track({name: 'cookies'})
    };
  },

  handleChange() {
    this.state.track.addNotes(Store.all());
  },

  onStartClick() {
    this.listener = Store.addListener(this.handleChange);
    this.state.track.startRecording();
    this.setState({recording: true});
  },

  onStopClick() {
    this.state.track.stopRecording();
    this.setState({recording: false});
    this.listener.remove();
  },

  onPlayClick() {
    this.state.track.play();
  },

  render() {
    return (
      <div>
        <button onClick={this.onStartClick}>Start</button>
        <button onClick={this.onStopClick}>Stop</button>
        <button onClick={this.onPlayClick}>Play</button>
      </div>
    );

  }
});

module.exports = Recorder;
