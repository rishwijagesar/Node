const express = require('express');
const router = express.Router();
const raspio = require("raspi-io").RaspiIO;
const { Board, Servo } = require("johnny-five");
const board = new Board({
    io: new raspio()
});

const servo = new Servo("P1-12");

board.on('ready', function () {

    // spin servo
    router.get('/spin', function (req, res) {        
        servo.sweep();
    });

    // stop servo spinning
    router.get('/stop', function (req, res) {
        servo.stop();
    });

});

board.on("exit", () => {
    servo.stop();
});

module.exports = router;