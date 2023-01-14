"use strict";
exports.__esModule = true;
exports.printPlateauCoordinates = exports.askPlateauEndYCoordinates = exports.askPlateauEndXCoordinates = void 0;
var console_1 = require("../views/console");
var index_1 = require("../views/index");
var plateau_1 = require("../models/plateau");
var plateau_2 = require("../models/plateau");
var askRover_1 = require("../views/askRover");
function askPlateauEndXCoordinates() {
    (0, console_1.askQuestion)('Enter the X Coordinate <= 7 ', inputValidationXCoordinates);
}
exports.askPlateauEndXCoordinates = askPlateauEndXCoordinates;
function askPlateauEndYCoordinates(startNavigation) {
    (0, console_1.askQuestion)('Enter the Y Coordinate <= 7 ', inputValidationYCoordinates);
}
exports.askPlateauEndYCoordinates = askPlateauEndYCoordinates;
function inputValidation(inp) {
    var typeinp = parseInt(inp);
    if (isNaN(typeinp)) {
        (0, console_1.print)("\uD83D\uDE2E");
        (0, console_1.print)("That's not a number \uD83D\uDE2D");
        return false;
    }
    if (typeinp > 7) {
        (0, console_1.print)('Enter a number <= 7');
        return false;
    }
    if (typeinp < 0) {
        (0, console_1.print)('Enter a number > 0');
        return false;
    }
    if (typeinp <= 7)
        return true;
    else
        return false;
}
function inputValidationXCoordinates(inp) {
    if (inputValidation(inp)) {
        (0, plateau_2.setPlateauXCoordinates)(parseInt(inp));
        return askPlateauEndYCoordinates('Y');
    }
    else
        (0, index_1.endAdventure)();
}
function inputValidationYCoordinates(inp) {
    if (inputValidation(inp)) {
        (0, plateau_2.setPlateauYCoordinates)(parseInt(inp));
        printPlateauCoordinates();
        return (0, askRover_1.askRoverXCoordinates)();
    }
    else
        (0, index_1.endAdventure)();
}
function printPlateauCoordinates() {
    (0, console_1.clear)(true);
    (0, console_1.print)('Plateau Coordinates');
    (0, console_1.print)("".concat(plateau_1.marsPlateau.endRangeXCoordinates, "  ").concat(plateau_1.marsPlateau.endRangeYCoordinates, "   "));
}
exports.printPlateauCoordinates = printPlateauCoordinates;
