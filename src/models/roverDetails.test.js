"use strict";
exports.__esModule = true;
var roverDetails_1 = require("./roverDetails");
var roverDetails_2 = require("./roverDetails");
describe("test set Rover Facing Direction ", function () {
    (0, roverDetails_1.setRoverFacingDirection)('nesw');
    it("should return NESW for setRoverFacingDirection()", function () {
        expect((0, roverDetails_2.getRoverWhereAbouts)().facingDirection).toBe('NESW');
    });
});
describe("test set Rover X Coordinates to 0 ", function () {
    (0, roverDetails_1.setRoverXCoordinates)(-1);
    it("should return undefined for setRoverXCoordinates()", function () {
        expect((0, roverDetails_2.getRoverWhereAbouts)().xcoordinates).toBe(0);
    });
});
describe("test set Rover X Coordinates to 2 ", function () {
    (0, roverDetails_1.setRoverXCoordinates)(2);
    it("should return undefined for setRoverXCoordinates()", function () {
        expect((0, roverDetails_2.getRoverWhereAbouts)().xcoordinates).toBe(2);
    });
});
describe("test set Rover X Coordinates to 0 ", function () {
    (0, roverDetails_1.setRoverXCoordinates)(6);
    it("should return undefined for setRoverXCoordinates()", function () {
        expect((0, roverDetails_2.getRoverWhereAbouts)().xcoordinates).toBe(0);
    });
});
describe("test set Rover Y Coordinates to 0 ", function () {
    (0, roverDetails_1.setRoverYCoordinates)(6);
    it("should return undefined for setRoverYCoordinates()", function () {
        expect((0, roverDetails_2.getRoverWhereAbouts)().ycoordinates).toBe(0);
    });
});
describe("test set Rover Y Coordinates to 2 ", function () {
    (0, roverDetails_1.setRoverYCoordinates)(2);
    it("should return undefined for setRoverYCoordinates()", function () {
        expect((0, roverDetails_2.getRoverWhereAbouts)().ycoordinates).toBe(2);
    });
});
describe("test set Rover Y Coordinates to 0 ", function () {
    (0, roverDetails_1.setRoverYCoordinates)(-1);
    it("should return undefined for setRoverYCoordinates()", function () {
        expect((0, roverDetails_2.getRoverWhereAbouts)().ycoordinates).toBe(0);
    });
});
