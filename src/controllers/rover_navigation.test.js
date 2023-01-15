"use strict";
exports.__esModule = true;
var roverDetails_1 = require("../models/roverDetails");
var rover_navigation_1 = require("../controllers/rover_navigation");
var plateau_1 = require("../models/plateau");
describe("test rotateLeftRover", function () {
    (0, plateau_1.setPlateauEndXCoordinates)(5);
    (0, plateau_1.setPlateauEndYCoordinates)(5);
    (0, roverDetails_1.setRoverWhereAbouts)(1, 1, 'N');
    it("should return W for rotateLeftRover from N Direction ()", function () {
        expect((0, rover_navigation_1.rotateLeftRover)()).toBe('W');
    });
});
describe("test rotateRightRover", function () {
    (0, plateau_1.setPlateauEndXCoordinates)(5);
    (0, plateau_1.setPlateauEndYCoordinates)(5);
    (0, roverDetails_1.setRoverWhereAbouts)(1, 1, 'N');
    it("should return W for rotateRightRover from N Direction ()", function () {
        expect((0, rover_navigation_1.rotateRightRover)()).toBe('E');
    });
});
describe("test haveRoverNavigate", function () {
    (0, plateau_1.setPlateauEndXCoordinates)(5);
    (0, plateau_1.setPlateauEndYCoordinates)(5);
    (0, roverDetails_1.setRoverWhereAbouts)(1, 2, 'N');
    (0, rover_navigation_1.haveRoverNavigate)('LMLMLMLML');
    it("should return W for rotateLeftRover from N Direction ()", function () {
        expect((((0, roverDetails_1.getRoverWhereAbouts)().xcoordinates === 3) &&
            ((0, roverDetails_1.getRoverWhereAbouts)().ycoordinates === 3) &&
            ((0, roverDetails_1.getRoverWhereAbouts)().facingDirection === 'E'))).toBe(true);
    });
});
describe("test NorthMove", function () {
    (0, plateau_1.setPlateauEndXCoordinates)(5);
    (0, plateau_1.setPlateauEndYCoordinates)(5);
    (0, roverDetails_1.setRoverWhereAbouts)(1, 2, 'N');
    (0, rover_navigation_1.northMove)(1, 2);
    it("should return 1,3,N for North Move ()", function () {
        expect((((0, roverDetails_1.getRoverWhereAbouts)().xcoordinates === 1) &&
            ((0, roverDetails_1.getRoverWhereAbouts)().ycoordinates === 3) &&
            ((0, roverDetails_1.getRoverWhereAbouts)().facingDirection === 'N'))).toBe(true);
    });
});
