const express = require('express');
const router = express.Router();

const raspio = require("raspi-io").RaspiIO;
const five = require("johnny-five");
const board =new five.Board({
    io: new raspio()
});

const LEDpin = new five.Led("P1-32");

board.on('ready', function() {
    
    // turn on led
    router.get('/on', function(req, res){
        LEDpin.on();
    });

    // turn of led
    router.get('/off', function(req, res){
        LEDpin.off();
    });

    // pulse led and fade out after 5 seconds
    router.get('/pulse', function(req, res){
        LEDpin.pulse();

        board.wait(5000, () => {
            LEDpin.fadeOut();
        });
    });

    // blink led and fade out after 5 seconds
    router.get('/blink', function(req, res){
        LEDpin.blink(500);

        board.wait(5000, () => {
            LEDpin.fadeOut();
        });
    });
});

board.on("exit", () => {
    LEDpin.off();
});

module.exports = router;
