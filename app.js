/**
 * Created by Pierre on 28/05/2017.
 */

var constants = require('./constants.js');
var express = require('express');
var fs = require('file-system');
var io = require('socket.io');

var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(constants.getPort(), function(){
    console.log('Listening on port 3000 !');
});