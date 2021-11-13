import RPi.GPIO as GPIO
import time 

motorPins = (7, 11, 13, 15)
CCWStep = (0x01,0x02,0x04,0x08)
CWStep = (0x08,0x04,0x02,0x01)

def setup():
    print ('Program is starting...')
    GPIO.setmode(GPIO.BOARD)       # Numbers GPIOs by physical location
    for pin in motorPins:
        GPIO.setup(pin,GPIO.OUT)

def moveOnePeriod(direction,ms):    
    for j in range(0,4,1):      #cycle for power supply order
        for i in range(0,4,1):  #assign to each pin, a total of 4 pins
            if (direction == 1):#power supply order clockwise
                GPIO.output(motorPins[i],((CCWStep[j] == 1<<i) and GPIO.HIGH or GPIO.LOW))
            else :              #power supply order anticlockwise
                GPIO.output(motorPins[i],((CWStep[j] == 1<<i) and GPIO.HIGH or GPIO.LOW))
        if(ms<3):       #the delay can not be less than 3ms, otherwise it will exceed speed limit of the motor
            ms = 3
        time.sleep(ms*0.001)    

def moveSteps(direction, ms, steps):
    for i in range(steps):
        moveOnePeriod(direction, ms)

def loop():
    moveSteps(1,3,512)
    time.sleep(0.5)

def motorStop():
    for i in range(0,4,1):
        GPIO.output(motorPins[i],GPIO.LOW)

def destroy():
    GPIO.cleanup()

if __name__ == '__main__':
    setup()
    try:
        loop()
    except KeyboardInterrupt:
        destroy()