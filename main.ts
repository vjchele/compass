input.calibrateCompass()
basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() <= 45 || input.compassHeading() >= 315) {
        basic.showArrow(ArrowNames.North)
    }
})
