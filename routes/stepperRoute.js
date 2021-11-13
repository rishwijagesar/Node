const express = require('express');
const router = express.Router();
const raspio = require("raspi-io").RaspiIO;
const { Board, Stepper } = require("johnny-five");
const board = new Board({
    io: new raspio()
});

const stepper = new Stepper({
    type: Stepper.TYPE.FOUR_WIRE,
    stepsPerRev: 200,
    pins: {
      motor1: "P1-12",
      motor2: "P1-13",
      motor3: "P1-11",
      motor4: "P1-15"
    }
  });

board.on('ready', function () {

    router.get('/move', function (req, res) {        
        stepper.rpm(180).direction(Stepper.DIRECTION.CCW).accel(1600).decel(1600);
    });   

});

board.on("exit", () => {
    stepper.stop();
});

module.exports = router;