var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;

var routes = require('./config/routes');
import {hashHistory} from 'react-router';

ReactDom.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
)
