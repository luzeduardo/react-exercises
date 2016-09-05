var React = require('react');
var NotesList = require('./NotesList');
var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired
  },
  render: function() {    
    return (
      <div>
        <p>Notes for {this.props.username}</p>
        <NotesList notes={this.props.notes}/>
      </div>
    )
  }
})

module.exports = Notes;
