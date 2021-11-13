const express = require('express');
const router = express.Router();
const {Board, Servo} = require("johnny-five");
const board = new Board();

const servo  = new Servo.Continuous("P1-11");

board.on('ready', function() {
 
    servo.stop();

    router.get('/spin', function(req, res){
        //servo.sweep();
    });

    

});

board.on("exit", () => {
   servo.stop();
});

module.exports = router;