var React = require('react');

var Notes = React.createClass({
  render: function() {
    console.log('Notes: ',this.props.notes)
    return (
      <div>
        <p>Notes</p>
      </div>
    )
  }
})

module.exports = Notes;
