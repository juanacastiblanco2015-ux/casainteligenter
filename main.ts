input.onButtonPressed(Button.A, function () {
    record.setSampleRate(10000, record.AudioSampleRateScope.Recording)
    basic.showIcon(IconNames.Ghost)
    record.startRecording(record.BlockingState.Blocking)
    basic.clearScreen()
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
	
})
input.onButtonPressed(Button.B, function () {
    record.setSampleRate(20000, record.AudioSampleRateScope.Recording)
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    if (("comando" as any) == ("abrir puerta " as any)) {
        pins.analogWritePin(AnalogPin.P8, 90)
        basic.showString("¨p¨")
    }
    if (("comando" as any) == ("cerrar puerta " as any)) {
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.showString("¨p¨")
    }
    if (("comando" as any) == ("abrir ventana " as any)) {
        pins.analogWritePin(AnalogPin.P0, 0)
        basic.showString("¨v¨")
    }
    if (("comando" as any) == ("cerrar ventana" as any)) {
        pins.analogWritePin(AnalogPin.P8, 90)
        basic.showString("¨v¨")
        record.playAudio(record.BlockingState.Blocking)
        basic.clearScreen()
    }
})
