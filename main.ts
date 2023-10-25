/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Lyver
 * Created on: Oct 2023
 * This program ...
*/

let distanceToObject: number = 0

// screen setup
basic.showIcon(IconNames.Happy)

// get distance from sonar
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )
  basic.showNumber(distanceToObject)
  basic.showIcon(IconNames.Happy)
})
