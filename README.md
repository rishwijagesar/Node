# Project NodeJS Car 

This project is about creating a DIY car made out of a cardboard operated by a Raspberry Pi 3b+.
The car is operated through the NodeJS Express library and some python. 
Additional features are added to show the working parts of express and may be used as integration tests in order to test node endpoints


## Raspberry Pi Setup

setup the raspberry pi with the following pinout
```
PIN 2     -       + Stepper Motor Drive Board
PIN 4     -       Power Cable (RED) Servo
PIN 6     -       - Stepper Motor Drive Board
PIN 7     -       IN1 Stepper Motor Drive Board
PIN 9     -       (BROWN) Cable Servo
PIN 11    -       IN2 Stepper Motor Drive Board    
PIN 12    -       (ORANGE) Cable Servo
PIN 13    -       IN3 Stepper Motor Drive Board 
PIN 15    -       IN4 Stepper Motor Drive Board 
PIN 32    -       LED plus
PIN 34    -       LED min
```

## Required parts

```
- Raspberry Pi 3b+
- Servo Motor
- Stepper Motor
- Stepper Motor Drive Board
- Breadboard
- Led Lights
- SD Card
- HDMI Cable
- Power Cable Raspberry Pi
- Jumper Wires
```


Install the latest NodeJS

Clone project to raspberry pi:

```
git clone https://github.com/rishwijagesar/Node.git
```

Go to project folder 
```
cd Node
```

Install depedencies
```
npm i
```

Run project
```
npm start
```

visit the website on:
```
http://localhost:8080
```

visit the swagger page on:
```
http://localhost:8080/docs
```
