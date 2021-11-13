const express = require('express');
const router = express.Router();

var raspio = require("raspi-io").RaspiIO;
var five = require("johnny-five");
var board =new five.Board({
    io: new raspio()
});

board.on('ready', function() {
    var LEDpin = new five.Pin("P1-12");
    var analogPin = new five.Pin('A0');

    router.get('/led/on', function(req, res){
        LEDpin.high();
    });
})

module.exports = router;