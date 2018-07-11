var restify = require('restify');
var server = restify.createServer();
var setupController = require('./controllers/setupController.js');
var homeController = require('./controllers/homeControllers.js');
var restifyValidator = require('restify-validator');
var mongoose = require('mongoose');
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

mongoose.connect('mongodb://localhost:27017/mydb');
setupController(server, restify, restifyValidator);
homeController(server, Gpio);

server.listen(8081, function() {
    console.log('%s listening at %s', server.name, server.url);
});