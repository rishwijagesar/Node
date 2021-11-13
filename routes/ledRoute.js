const express = require('express');
const router = express.Router();

var raspio = require("raspi-io").RaspiIO;
var five = require("johnny-five");
var board =new five.Board({
    io: new raspio()
});

board.on('ready', function() {
    var LEDpin = new five.Led("P1-12");

    router.get('/on', function(req, res){
        LEDpin.on();
    });

    router.get('/off', function(req, res){
        LEDpin.off();
    });

    router.get('/pulse', function(req, res){
        LEDpin.pulse();
    });

    router.get('/blink', function(req, res){
        LEDpin.blink();
    });
})

module.exports = router;
