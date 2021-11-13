const express = require('express');
const router = express.Router();
const raspio = require("raspi-io").RaspiIO;
const { Board, Servo } = require("johnny-five");
const board = new Board({
    io: new raspio()
});



board.on('ready', function () {

    router.get('/spin', function (req, res) {
        const servo = new Servo.Continuous("P1-11");
        servo.sweep();
    });

    router.get('/stop', function (req, res) {
        const servo = new Servo.Continuous("P1-11");
        servo.stop();
    });

});

board.on("exit", () => {
    const servo = new Servo.Continuous("P1-11");
    servo.stop();
});

module.exports = router;