const express = require('express');
const router = express.Router();

var raspio = require("raspi-io").RaspiIO;
var five = require("johnny-five");
var board =new five.Board({
    io: new raspio()
});
var LEDpin = new five.Led("P1-12");

board.on('ready', function() {
    

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
        LEDpin.blink(500);

        board.wait(5000, () => {
            LEDpin.fadeOut();
        });
    });
});

board.on("exit", () => {
    LEDpin.off();
})

module.exports = router;
