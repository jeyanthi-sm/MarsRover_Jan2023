"use strict";
exports.__esModule = true;
exports.haveRoverNavigate = void 0;
var console_1 = require("../views/console");
var askRover_1 = require("../views/askRover");
var roverDetails_1 = require("../models/roverDetails");
var index_1 = require("../views/index");
var roverDetails_2 = require("../models/roverDetails");
var plateau_1 = require("../models/plateau");
function haveRoverNavigate(instructions) {
    for (var i = 0; i < instructions.length; ++i) {
        switch (instructions[i]) {
            case 'L':
                var endResultDir = rotateLeftRover();
                (0, roverDetails_1.setRoverFacingDirection)(endResultDir);
                break;
            case 'R':
                var endResultDirection = rotateRightRover();
                (0, roverDetails_1.setRoverFacingDirection)(endResultDirection);
                break;
            case 'M':
                moveRover();
                break;
        }
    }
    (0, askRover_1.printRoverWhereAbouts)();
    (0, console_1.askQuestion)('Enter Y to Continue', index_1.startRoverNavigation);
}
exports.haveRoverNavigate = haveRoverNavigate;
function rotateLeftRover() {
    var roverFacingDirection = (0, roverDetails_1.getRoverFacingDirection)();
    var leftTurnObj = { 'N': 'W', 'W': 'S', 'S': 'E', 'E': 'N' };
    var resleftTurnObject = leftTurnObj[roverFacingDirection];
    return resleftTurnObject;
}
function rotateRightRover() {
    var roverFacingDirection = (0, roverDetails_1.getRoverFacingDirection)();
    var rightTurnObj = { 'N': 'E', 'E': 'S', 'S': 'W', 'W': 'N' };
    var resrightTurnObject = rightTurnObj[roverFacingDirection];
    return resrightTurnObject;
}
function moveRover() {
    var currentRoverWhereAbouts = (0, roverDetails_1.getRoverWhereAbouts)();
    var roverFacingDirection = (0, roverDetails_1.getRoverFacingDirection)();
    var proposedRoverWhereAbouts = new roverDetails_2.roverWhereAbouts();
    switch (roverFacingDirection) {
        case 'N':
            northMove(currentRoverWhereAbouts.xcoordinates, currentRoverWhereAbouts.ycoordinates);
            break;
        case 'S':
            southMove(currentRoverWhereAbouts.xcoordinates, currentRoverWhereAbouts.ycoordinates);
            break;
        case 'E':
            eastMove(currentRoverWhereAbouts.xcoordinates, currentRoverWhereAbouts.ycoordinates);
            break;
        case 'W':
            westMove(currentRoverWhereAbouts.xcoordinates, currentRoverWhereAbouts.ycoordinates);
            break;
    }
    proposedRoverWhereAbouts = (0, roverDetails_1.getRoverWhereAbouts)();
    return proposedRoverWhereAbouts;
}
function northMove(currentRoverWhereAboutsXcoordinates, currentRoverWhereAboutsYCoordinates) {
    //const marsPlateauEndYcoordinates: number = marsPlateau.endRangeYCoordinates as number;
    var newRoverYCoordinatesval = currentRoverWhereAboutsYCoordinates;
    var proposedRoverYCoordinatesVal = newRoverYCoordinatesval + 1;
    if (proposedRoverYCoordinatesVal >= plateau_1.marsPlateau.startRangeYCoordinates &&
        proposedRoverYCoordinatesVal <= plateau_1.marsPlateau.endRangeYCoordinates)
        (0, roverDetails_1.setRoverWhereAbouts)(currentRoverWhereAboutsXcoordinates, proposedRoverYCoordinatesVal, 'N');
}
function southMove(currentRoverWhereAboutsXcoordinates, currentRoverWhereAboutsYCoordinates) {
    //  const marsPlateauStartYcoordinates: number = marsPlateau.startRangeYCoordinates as number;
    var newRoverYCoordinatesval = currentRoverWhereAboutsYCoordinates;
    var proposedRoverYCoordinatesVal = newRoverYCoordinatesval - 1;
    if (proposedRoverYCoordinatesVal >= plateau_1.marsPlateau.startRangeYCoordinates &&
        proposedRoverYCoordinatesVal <= plateau_1.marsPlateau.endRangeYCoordinates)
        (0, roverDetails_1.setRoverWhereAbouts)(currentRoverWhereAboutsXcoordinates, proposedRoverYCoordinatesVal, 'S');
}
function eastMove(currentRoverWhereAboutsXcoordinates, currentRoverWhereAboutsYCoordinates) {
    //const marsPlateauEndXcoordinates: number = marsPlateau.endRangeXCoordinates as number;
    var newRoverXCoordinatesval = currentRoverWhereAboutsXcoordinates;
    var proposedRoverXCoordinatesVal = newRoverXCoordinatesval + 1;
    if (proposedRoverXCoordinatesVal >= plateau_1.marsPlateau.startRangeXCoordinates &&
        proposedRoverXCoordinatesVal <= plateau_1.marsPlateau.endRangeXCoordinates)
        (0, roverDetails_1.setRoverWhereAbouts)(proposedRoverXCoordinatesVal, currentRoverWhereAboutsYCoordinates, 'E');
}
function westMove(currentRoverWhereAboutsXcoordinates, currentRoverWhereAboutsYCoordinates) {
    var marsPlateauStartXcoordinates = plateau_1.marsPlateau.startRangeXCoordinates;
    var newRoverXCoordinatesval = currentRoverWhereAboutsXcoordinates;
    var proposedRoverXCoordinatesVal = currentRoverWhereAboutsXcoordinates - 1;
    if (proposedRoverXCoordinatesVal >= plateau_1.marsPlateau.startRangeXCoordinates &&
        proposedRoverXCoordinatesVal <= plateau_1.marsPlateau.endRangeXCoordinates)
        (0, roverDetails_1.setRoverWhereAbouts)(proposedRoverXCoordinatesVal, currentRoverWhereAboutsYCoordinates, 'W');
}
