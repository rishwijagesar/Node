const express = require('express');
const router = express.Router();

var raspio = require("raspi-io").RaspiIO;
var five = require("johnny-five");

var board = new five.Board({
    io: new raspio()
});

router.post('/', (req, res) => {
    toggleLed();
    res.json({ status: isOn });
});

board.on('ready', function() { 
    // Define the pin 13 to be used
    led = new five.Led(13);
    // Turn off the Led
    led.off();
    // save the actual state of the Led
    isReady = true; 
});

function toggleLed () {
    // If the Led is on
    if (isOn) {
        //Turn off the Led
        led.off();
        isOn = false;
    } else {
        //Turn on the Led
        led.on();
        isOn = true;
    }
} 

module.exports = router;