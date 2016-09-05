var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');

var ReactFireMixin = require('reactfire');
var firebase = require('firebase');

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      notes: ['note1','note2'],
      bio: {
        'name':'Eduardo Luz'
      },
      repos: ['doc1','project 2']
    }
  },
  componentDidMount: function(){
    var config = {
      apiKey: "",
      authDomain: "react-bd165.firebaseapp.com",
      databaseURL: "https://react-bd165.firebaseio.com",
      storageBucket: "",
    };
    firebase.initializeApp(config);
    this.ref = firebase.database().ref('/');
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  },
  componentWillUnmount: function() {
    //removing listeners
    this.unbind('notes');
  },
  render:  function(){

    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes}/>
        </div>
      </div>
    )
  }
})

module.exports = Profile;