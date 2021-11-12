const express = require('express');
const router = express.Router();

var raspio = require("raspi-io").RaspiIO;
var five = require("johnny-five");
var board =new five.Board({
    io: new raspio()
});

router.get('/', (req, res) => {
    try {
        board.on("ready", function() {
            var led = new five.Led("P1-12");
            this.repl.inject({redLed: led});
        })
    } catch (error){

    }
});

module.exports = router;