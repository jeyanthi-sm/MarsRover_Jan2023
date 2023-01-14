"use strict";
exports.__esModule = true;
exports.setPlateauYCoordinates = exports.setPlateauXCoordinates = exports.marsPlateau = exports.plateau = void 0;
var plateau //extends coordinates 
 = /** @class */ (function () {
    function plateau() {
    }
    plateau.prototype.plateau = function (startRangeXcoordinates, startRangeYCoordinates, endRangeXCoordinates, endRangeYCoordinates) {
        this.startRangeXCoordinates = startRangeXcoordinates || 0;
        this.startRangeYCoordinates = startRangeYCoordinates || 0;
        this.endRangeXCoordinates = endRangeXCoordinates || 0;
        this.endRangeYCoordinates = endRangeYCoordinates || 0;
    };
    return plateau;
}());
exports.plateau = plateau;
;
exports.marsPlateau = new plateau();
function setPlateauXCoordinates(endXCoordinates) {
    exports.marsPlateau.startRangeXCoordinates = 0;
    exports.marsPlateau.endRangeXCoordinates = endXCoordinates;
}
exports.setPlateauXCoordinates = setPlateauXCoordinates;
function setPlateauYCoordinates(endYCoordinates) {
    exports.marsPlateau.startRangeYCoordinates = 0;
    exports.marsPlateau.endRangeYCoordinates = endYCoordinates;
}
exports.setPlateauYCoordinates = setPlateauYCoordinates;
