input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
    music.playMelody("C5 A B G A F G E ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    music.playMelody("E D G F B A C5 B ", 120)
})
basic.showString("Hola como te sientes hoy")
