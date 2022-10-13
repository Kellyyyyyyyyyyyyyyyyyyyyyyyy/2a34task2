basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
                `)
            basic.showLeds(`
                . # . # .
                # . . . #
                . . . . .
                # . . . #
                . # . # .
                `)
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(1000)
        }
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showIcon(IconNames.QuarterNote)
        basic.showIcon(IconNames.EigthNote)
        basic.showIcon(IconNames.QuarterNote)
        basic.showIcon(IconNames.Giraffe)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
})
