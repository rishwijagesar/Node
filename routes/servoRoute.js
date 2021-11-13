const express = require('express');
const router = express.Router();

const raspio = require("raspi-io").RaspiIO;
const five = require("johnny-five");
const board =new five.Board({
    io: new raspio()
});

const servo = new Servo.Continuous("P1-11");

board.on('ready', function() {
 
    router.get('/spin', function(req, res){
        servo.sweep();
    });

});