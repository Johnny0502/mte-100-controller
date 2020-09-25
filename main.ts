function checkButtons () {
    while (input.buttonA.isPressed()) {
        makerController.player1.setButton(ArcadeButton.A, true)
        displayColorA()
    }
    while (input.buttonB.isPressed()) {
        makerController.player1.setButton(ArcadeButton.B, true)
        displayColorB()
    }
    makerController.player1.setButton(ArcadeButton.A, false)
    makerController.player1.setButton(ArcadeButton.B, false)
    turnOffLights()
}
function turnOffLights () {
    light.setAll(0x000000)
}
function displayColorB () {
    light.showRing(
    `black black black black black pink purple red purple pink`
    )
}
function displayColorA () {
    light.showRing(
    `pink purple red purple pink black black black black black`
    )
}
makerController.player1.reset()
forever(function () {
    checkButtons()
    makerController.player1.setAnalogThreshold(ArcadeAnalogButton.LeftRight, -1023, 1023)
    makerController.player1.setAnalogThreshold(ArcadeAnalogButton.DownUp, -1023, 1023)
})
