const express = require('express');
const router = express.Router();
const raspio = require("raspi-io").RaspiIO;
const { Board, Servo } = require("johnny-five");
const board = new Board({
    io: new raspio()
});

const servo = new Servo.Continuous("P1-11");

board.on('ready', function () {

    router.get('/spin', function (req, res) {        
        servo.sweep();
    });

    router.get('/stop', function (req, res) {
        servo.stop();
    });

});

board.on("exit", () => {
    servo.stop();
});

module.exports = router;