"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');
//para rutas sin # agregamos como parametro: Router.HistoryLocation

InitializeActions.initApp();

Router.run(routes, function(Handler){
	React.render(<Handler/>, document.getElementById('app'));
});
