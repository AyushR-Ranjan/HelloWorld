input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
    music.stopAllSounds()
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    led.enable(Math.randomBoolean())
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    music.playMelody("E B C5 A B G A F ", 500)
})
basic.showIcon(IconNames.Happy)
