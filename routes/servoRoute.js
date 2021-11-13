const express = require('express');
const router = express.Router();

const raspio = require("raspi-io").RaspiIO;
const {five, Servo} = require("johnny-five");
const board = new five.Board({
    io: new raspio()
});

const Servopin = new Servo.Continuous("P1-11");

board.on('ready', function() {
 
    router.get('/spin', function(req, res){
        Servopin.sweep();
    });

});