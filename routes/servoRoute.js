const express = require('express');
const router = express.Router();
const {Board, Servo} = require("johnny-five");
const board = new Board();



board.on('ready', function() {
 
    const servo  = new Servo.Continuous("P1-11");

    router.get('/spin', function(req, res){
        servo.sweep();
    });

});