function GirarIzquierda (velocidad: number, tiempo: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, velocidad)
    basic.pause(tiempo)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, velocidad)
    basic.pause(tiempo)
    maqueen.motorStop(maqueen.Motors.All)
}
function MusicSongMarioBros () {
    music.play(music.stringPlayable("E4 E4 E4 E4 ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C4 E4 G4 ", 260), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G3 ", 140), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A4 B4 Bb4 A4 G4 ", 380), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E4 G4 A4 F4 G4 E4 C4 D4 B3 ", 320), music.PlaybackMode.UntilDone)
}
function MusicSongMozart () {
    music.play(music.stringPlayable("C4 D4 E4 C4 C4 D4 E4 C4 E4 F4 G4 E4 F4 G4", 300), music.PlaybackMode.UntilDone)
}
function GirarDerecha (velocidad: number, tiempo: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, velocidad)
    basic.pause(tiempo)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, velocidad)
    basic.pause(tiempo)
    maqueen.motorStop(maqueen.Motors.All)
}
function Giraraleatorio (velocidad: number, tiempo: number) {
    if (Math.randomBoolean()) {
        MoverAtras(velocidad, tiempo)
    } else {
        GirarDerecha(velocidad, tiempo)
    }
}
function MoverAdelante (velocidad: number, tiempo: number) {
    dir1 = input.compassHeading()
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
    basic.pause(tiempo)
    maqueen.motorStop(maqueen.Motors.All)
    dir2 = input.compassHeading()
    if (Math.abs(dir2 - dir1) < 20 && maqueen.Ultrasonic(PingUnit.Centimeters) < 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        GirarDerecha(velocidad, tiempo)
    }
}
function DarkVader () {
    music.play(music.stringPlayable("G4 G4 G4", 100), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("Eb4 Bb4 ", 180), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G4  ", 100), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("Eb4 Bb4 ", 180), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G4  ", 180), music.PlaybackMode.UntilDone)
    basic.pause(500)
    music.play(music.stringPlayable("D5 D5 D5", 100), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("Eb5 Bb4  ", 180), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G4  ", 100), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("Eb4 Bb4  ", 180), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G4  ", 100), music.PlaybackMode.UntilDone)
    basic.pause(200)
}
function MusicSongFigaro () {
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
function MoverAtras (velocidad: number, tiempo: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, velocidad)
    basic.pause(tiempo)
    maqueen.motorStop(maqueen.Motors.All)
}
let song = 0
let dir2 = 0
let dir1 = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
MusicSongMozart()
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) >= 15) {
        song = 0
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15 && maqueen.Ultrasonic(PingUnit.Centimeters) >= 10) {
            song = 0
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
            MoverAdelante(80, 150)
        }
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10 && maqueen.Ultrasonic(PingUnit.Centimeters) >= 7) {
            song = 1
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            MoverAdelante(70, 150)
        }
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 7) {
            song = 2
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            GirarDerecha(60, 250)
        }
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        MoverAdelante(120, 150)
    }
})
control.inBackground(function () {
    while (true) {
        if (song == 0) {
            MusicSongMarioBros()
        } else if (song == 1) {
            DarkVader()
        } else if (song == 2) {
            MusicSongFigaro()
        } else if (song == 3) {
            MusicSongMozart()
        }
    }
})
