var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
	
	var app = express();

	app.use(express.static('./app/public'));
	app.set('view engine', 'ejs');
	app.set('views','./app/views'); //local a partir do inicio arquivo app.js

	app.use(bodyParser.urlencoded({extended: true})); //como vem a requisicao
	app.use(bodyParser.json());
	app.use(expressValidator());

	load('routes', {cwd: 'app'})
		.then('infra')
		.into(app); //carrega tudo da pasta routes

		app.use(function(req,res,next){
			res.status(404).render('erros/404');
			next();
		});

		app.use(function(error,req,res,next){
			if(process.env.NODE_ENV == 'production'){
				res.status(500).render('erros/500');
				return;
			}
			next(error);
		});

	return app;
}