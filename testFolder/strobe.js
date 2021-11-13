const express = require("express");
const five = require('johnny-five'); 
const app = express();

var board = new five.Board();
var isReady = false;
var isOn = false;
var led;

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.route("/")
    .get((req, res) => {
        toggleLed();
        res.json({status: isOn});
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