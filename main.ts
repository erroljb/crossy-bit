input.onButtonPressed(Button.A, function () {
    errol_y += -1
    draw()
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1203, 4290, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
function start_car () {
    while (state == 0) {
        car_y = randint(1, 3)
        for (let index = 0; index <= 5; index++) {
            basic.pause(100)
            car_x = index
            draw()
            if (car_x == errol_x && car_y == errol_y) {
                state = 1
            }
        }
        if (errol_y == 0) {
            state = 2
        }
    }
    errol_y = -1
    if (state == 1) {
        basic.clearScreen()
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1066, 1, 255, 87, 7000, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.showString("gameover")
    } else {
        basic.clearScreen()
        basic.showString("winner")
        basic.showLeds(`
            # # # # #
            # . . . #
            . # # # .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            . # # # .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            . # # # .
            . . # . .
            . # # # .
            `)
    }
}
function draw () {
    basic.clearScreen()
    led.plot(errol_x, errol_y)
    led.plot(car_x, car_y)
}
input.onButtonPressed(Button.AB, function () {
    led.stopAnimation()
    start()
    draw()
    music.playMelody("C - C - C - C5 - ", 120)
    start_car()
})
input.onButtonPressed(Button.B, function () {
    errol_y += 1
    draw()
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1203, 4290, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
function start () {
    errol_x = 2
    errol_y = 4
    state = 0
    car_x = -1
}
let errol_x = 0
let car_x = 0
let car_y = 0
let state = 0
let errol_y = 0
basic.showString("pressA+B")
basic.forever(function () {
	
})
