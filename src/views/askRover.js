"use strict";
exports.__esModule = true;
exports.getRoverWhereAboutsInp = exports.printRoverWhereAbouts = exports.askRoverInstruction = exports.askRoverFacingDirection = exports.askRoverYCoordinates = exports.askRoverXCoordinates = void 0;
var console_1 = require("../views/console");
var plateau_1 = require("../models/plateau");
var index_1 = require("../views/index");
var askPlateau_1 = require("./askPlateau");
var roverDetails_1 = require("../models/roverDetails");
var roverDetails_2 = require("../models/roverDetails");
var rover_navigation_1 = require("../controllers/rover_navigation");
function askRoverXCoordinates() {
    (0, console_1.askQuestion)("Enter the Rover X Coordinate <= ".concat(plateau_1.marsPlateau.endRangeXCoordinates), inputValidationForRoverXCoordinates);
}
exports.askRoverXCoordinates = askRoverXCoordinates;
function askRoverYCoordinates() {
    (0, console_1.askQuestion)("Enter the Rover Y Coordinate <= ".concat(plateau_1.marsPlateau.endRangeYCoordinates), inputValidationForRoverYCoordinates);
}
exports.askRoverYCoordinates = askRoverYCoordinates;
function askRoverFacingDirection() {
    (0, console_1.askQuestion)('Enter the Rover Facing Direction ', inputValidationRoverFacingDirection);
}
exports.askRoverFacingDirection = askRoverFacingDirection;
function askRoverInstruction() {
    (0, console_1.askQuestion)('Enter the Rover Instructions ', inputValidationRoverInstructions);
}
exports.askRoverInstruction = askRoverInstruction;
function inputValidationRoverInstructions(inp) {
    var strPattern = new RegExp(/^[lrm]+$/, 'gi');
    var matchPattern = strPattern.test(inp);
    if (matchPattern)
        (0, rover_navigation_1.haveRoverNavigate)(inp.toUpperCase());
    else
        (0, index_1.endAdventure)();
}
function inputValidationForRoverXCoordinates(inp) {
    var typeinp = parseInt(inp);
    if (isNaN(typeinp)) {
        (0, console_1.print)("\uD83D\uDE2E");
        (0, console_1.print)("That's not a number \uD83D\uDE2D");
        return (0, index_1.endAdventure)();
    }
    if (typeinp > plateau_1.marsPlateau.endRangeXCoordinates) {
        (0, console_1.print)("Enter a number <= ".concat(plateau_1.marsPlateau.endRangeXCoordinates));
        return (0, index_1.endAdventure)();
    }
    if (typeinp < plateau_1.marsPlateau.startRangeXCoordinates) {
        (0, console_1.print)("Enter a number > ".concat(plateau_1.marsPlateau.startRangeXCoordinates));
        return (0, index_1.endAdventure)();
    }
    if (typeinp <= plateau_1.marsPlateau.endRangeXCoordinates) {
        (0, roverDetails_1.setRoverXCoordinates)(typeinp);
        return askRoverYCoordinates();
    }
    else
        (0, index_1.endAdventure)();
}
function inputValidationForRoverYCoordinates(inp) {
    var typeinp = parseInt(inp);
    if (isNaN(typeinp)) {
        (0, console_1.print)("\uD83D\uDE2E");
        (0, console_1.print)("That's not a number \uD83D\uDE2D");
        return (0, index_1.endAdventure)();
    }
    if (typeinp > plateau_1.marsPlateau.endRangeYCoordinates) {
        (0, console_1.print)("Enter a number <= ".concat(plateau_1.marsPlateau.endRangeYCoordinates));
        return (0, index_1.endAdventure)();
    }
    if (typeinp < plateau_1.marsPlateau.startRangeYCoordinates) {
        (0, console_1.print)("Enter a number > ".concat(plateau_1.marsPlateau.startRangeYCoordinates));
        return (0, index_1.endAdventure)();
    }
    if (typeinp <= plateau_1.marsPlateau.endRangeYCoordinates) {
        (0, roverDetails_1.setRoverYCoordinates)(typeinp);
        return askRoverFacingDirection();
    }
    else
        (0, index_1.endAdventure)();
}
function inputValidationRoverFacingDirection(inp) {
    var strPattern = new RegExp(/^[news]+$/, 'gi');
    var matchPattern = strPattern.test(inp);
    if (matchPattern) {
        (0, roverDetails_1.setRoverFacingDirection)(inp.toUpperCase());
        (0, console_1.clear)(true);
        (0, askPlateau_1.printPlateauCoordinates)();
        printRoverWhereAbouts();
        return askRoverInstruction();
    }
    else
        (0, index_1.endAdventure)();
}
function printRoverWhereAbouts() {
    (0, console_1.print)('    Rover WhereAbouts    ');
    (0, console_1.print)("".concat(roverDetails_2.roverWhereAboutsCurrent.xcoordinates, "  ").concat(roverDetails_2.roverWhereAboutsCurrent.ycoordinates, "  ").concat(roverDetails_2.roverWhereAboutsCurrent.facingDirection));
}
exports.printRoverWhereAbouts = printRoverWhereAbouts;
function getRoverWhereAboutsInp(inpRoverWhereAbouts) {
    return inpRoverWhereAbouts;
}
exports.getRoverWhereAboutsInp = getRoverWhereAboutsInp;
