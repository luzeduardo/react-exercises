var React = require('react');

var NotesList = React.createClass({
    var notes = this.props.notes.map(function(note, index){
      return <li className="list-group-item" key={index}>{note[.value]}</li>
    });
    render: function() {
      <ul className="list-group">
        {notes}
      </ul>
    }
});

module.exports = NotesList;
