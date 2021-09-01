input.onButtonPressed(Button.A, function () {
    if (input.temperature() >= 30) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    if (input.temperature() >= 30) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
basic.forever(function () {
    while (0 == 0) {
        if (input.temperature() >= 30) {
            music.playMelody("C5 B A G F E D C ", 120)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.showNumber(input.temperature())
            basic.showString("Fan will on")
            while (input.temperature() >= 30) {
                servos.P0.setAngle(180)
                basic.pause(100)
                servos.P0.setAngle(0)
                basic.pause(100)
                servos.P0.setAngle(180)
                basic.pause(100)
                servos.P0.setAngle(0)
                basic.pause(100)
            }
        }
        if (input.temperature() < 30) {
            while (input.temperature() < 30) {
                pins.digitalWritePin(DigitalPin.P2, 0)
                pins.digitalWritePin(DigitalPin.P1, 1)
                basic.showNumber(input.temperature())
                basic.showString("Normal")
            }
        }
    }
})
