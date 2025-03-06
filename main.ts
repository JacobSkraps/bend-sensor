let current = 0
basic.showLeds(`
    . # # # .
    # . # . #
    # . # . #
    # # # # #
    . # . # .
    `)
music.play(music.stringPlayable("- - C E B A B C5 ", 120), music.PlaybackMode.UntilDone)
let soundPitch = 0
basic.forever(function () {
    current = pins.analogReadPin(AnalogReadWritePin.P0)
    basic.showNumber(current)
    basic.pause(500)
    basic.clearScreen()
    if (current > 0) {
        soundPitch = current * 50
        basic.showIcon(IconNames.Yes)
        music.play(music.createSoundExpression(
        WaveShape.Square,
        soundPitch,
        soundPitch,
        255,
        255,
        500,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.No)
    }
})
