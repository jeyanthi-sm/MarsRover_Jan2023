"use strict";
exports.__esModule = true;
exports.getRoverFacingDirection = exports.getRoverWhereAbouts = exports.setRoverFacingDirection = exports.setRoverYCoordinates = exports.setRoverXCoordinates = exports.setRoverWhereAbouts = exports.getRoverWhereAboutsInp = exports.roverWhereAboutsCurrent = exports.roverWhereAbouts = void 0;
var roverWhereAbouts = /** @class */ (function () {
    function roverWhereAbouts() {
    }
    roverWhereAbouts.prototype.roverWhereAbouts = function (xCoordinates, ycoordinates, facingDirection) {
        this.xcoordinates = xCoordinates || 0;
        this.ycoordinates = ycoordinates || 0;
        this.facingDirection = facingDirection || 'N';
    };
    return roverWhereAbouts;
}());
exports.roverWhereAbouts = roverWhereAbouts;
;
exports.roverWhereAboutsCurrent = new roverWhereAbouts();
function getRoverWhereAboutsInp(inpRoverWhereAbouts) {
    return inpRoverWhereAbouts;
}
exports.getRoverWhereAboutsInp = getRoverWhereAboutsInp;
function setRoverWhereAbouts(xCoordinates, ycoordinates, facingDirection) {
    exports.roverWhereAboutsCurrent.xcoordinates = xCoordinates;
    exports.roverWhereAboutsCurrent.ycoordinates = ycoordinates;
    exports.roverWhereAboutsCurrent.facingDirection = facingDirection;
}
exports.setRoverWhereAbouts = setRoverWhereAbouts;
function setRoverXCoordinates(xCoordinates) {
    exports.roverWhereAboutsCurrent.xcoordinates = xCoordinates;
}
exports.setRoverXCoordinates = setRoverXCoordinates;
function setRoverYCoordinates(yCoordinates) {
    exports.roverWhereAboutsCurrent.ycoordinates = yCoordinates;
}
exports.setRoverYCoordinates = setRoverYCoordinates;
function setRoverFacingDirection(inpDirection) {
    exports.roverWhereAboutsCurrent.facingDirection = inpDirection;
}
exports.setRoverFacingDirection = setRoverFacingDirection;
function getRoverWhereAbouts() {
    return exports.roverWhereAboutsCurrent;
}
exports.getRoverWhereAbouts = getRoverWhereAbouts;
function getRoverFacingDirection() {
    return exports.roverWhereAboutsCurrent.facingDirection;
}
exports.getRoverFacingDirection = getRoverFacingDirection;
