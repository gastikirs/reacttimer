import React from 'react'; //equals to var.. require
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="timer" component={Timer}/>
			<Route path="countdown" component={Countdown}/>
			<IndexRoute component={Timer}/>
		</Route>
	</Router>,
  document.getElementById('app')
);