function GirarIzquierda (velocidad: number, tiempo: number) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, velocidad)
    basic.pause(tiempo)
    maqueen.motorStop(maqueen.Motors.All)
}
function moverAtras (velocidad: number, tiempo: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, velocidad)
    basic.pause(tiempo)
    maqueen.motorStop(maqueen.Motors.All)
}
function GirarDerecha (velocidad: number, tiempo: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, velocidad)
    basic.pause(tiempo)
    maqueen.motorStop(maqueen.Motors.All)
}
function Giraraleatorio (velocidad: number, tiempo: number) {
    moverAtras(velocidad, tiempo)
    GirarDerecha(velocidad, tiempo)
}
function moverAdelante (velocidad: number, tiempo: number) {
    dir1 = input.compassHeading()
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
    basic.pause(tiempo)
    dir2 = input.compassHeading()
    if (Math.abs(dir2 - dir1) < 20 && maqueen.Ultrasonic(PingUnit.Centimeters) < 3) {
        basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        Giraraleatorio(velocidad, tiempo)
    }
    maqueen.motorStop(maqueen.Motors.All)
}
let dir2 = 0
let dir1 = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
radio.setGroup(1)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) >= 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        moverAdelante(40, 500)
    }
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        moverAdelante(20, 250)
    }
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        GirarDerecha(40, 500)
    }
})

function musicSongFigaro() {
    music.play(music.stringPlayable("A5", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G5 F5", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A5", 180), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G5 F5", 180), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A5", 180), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G5 F5", 180), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A5", 180), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G5 F5", 180), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A5", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G5 F5", 120), music.PlaybackMode.UntilDone)
    basic.pause(1000)
}
