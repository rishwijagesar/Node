const express = require('express');
const { spawn } = require('child_process');
const router = express.Router();

router.get('/left', (req, res) => {
    let dataToSend;
    const python = spawn('python', ['./helper/stepperLeft.py']);

    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(dataToSend)
    });
});

router.get('/right', (req, res) => {
    let dataToSend;
    const python = spawn('python', ['./helper/stepperRight.py']);

    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(dataToSend)
    });
});


module.exports = router;