const Dispatcher = require('./dispatcher/dispatcher.js');
const Note = require('./util/note.js');
const keyListeners = require('./util/add_key_listeners.js');
const NoteKey = require('./components/note_key.jsx');
const React = require('react');
const ReactDOM = require('react-dom');
const Organ = require('./components/organ.jsx');



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Organ />,
    document.getElementById('content')
  );
});


window.Note = new Note(261.63);
