"use strict";
exports.__esModule = true;
exports.endAdventure = exports.startRoverNavigation = void 0;
var console_1 = require("./console");
var askPlateau_1 = require("../views/askPlateau");
function startRoverNavigation() {
    (0, console_1.clear)(false);
    (0, console_1.print)('-------------------------------------------------');
    (0, console_1.print)('| Welcome to Mars land! You are The Chosen One  |');
    (0, console_1.print)('| To give Mars Rover Navigation                 |');
    (0, console_1.print)('-------------------------------------------------');
    //	askQuestion(`     Enter Y to Start / N to End             `, startProcess);
    (0, askPlateau_1.askPlateauEndXCoordinates)();
}
exports.startRoverNavigation = startRoverNavigation;
function startProcess() {
    (0, askPlateau_1.askPlateauEndXCoordinates)();
}
function endAdventure() {
    (0, console_1.print)('***************************************');
    (0, console_1.print)('You did not make it through Wonderland. 😭');
    (0, console_1.askQuestion)('Press ENTER to restart! ', startRoverNavigation);
}
exports.endAdventure = endAdventure;
startRoverNavigation();
