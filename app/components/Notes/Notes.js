var React = require('react');
var NotesList = require('./NotesList');
var Notes = React.createClass({
  render: function() {
    console.log('Notes: ', this.props.notes)
    return (
      <div>
        <p>Notes for {this.props.username}</p>
        <NotesList notes={this.props.notes}/>
      </div>
    )
  }
})

module.exports = Notes;
