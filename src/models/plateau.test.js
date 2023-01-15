"use strict";
exports.__esModule = true;
var plateau_1 = require("../models/plateau");
var plateau_2 = require("../models/plateau");
describe("test set Plateau Start X Coordinates", function () {
    (0, plateau_1.setPlateauStartXCoordinates)();
    it("should return 0 for setPlateauStartXCoordinates()", function () {
        expect((0, plateau_2.getPlateauStartXCoordinates)()).toBe(0);
    });
});
describe("test set Plateau Start Y Coordinates", function () {
    (0, plateau_1.setPlateauStartYCoordinates)();
    it("should return 0 for setPlateauStartYCoordinates()", function () {
        expect((0, plateau_2.getPlateauStartYCoordinates)()).toBe(0);
    });
});
describe("test set Plateau End X Coordinates", function () {
    (0, plateau_1.setPlateauEndXCoordinates)(-1);
    it("should return undefined for setPlateauEndXCoordinates() -1 ", function () {
        expect((0, plateau_2.getPlateauEndXCoordinates)()).toBe(undefined);
    });
});
describe("test set Plateau End X Coordinates", function () {
    (0, plateau_1.setPlateauEndXCoordinates)(2);
    it("should return undefined for setPlateauEndXCoordinates() -1 ", function () {
        expect((0, plateau_2.getPlateauEndXCoordinates)()).toBe(2);
    });
});
describe("test set Plateau End X Coordinates", function () {
    (0, plateau_1.setPlateauEndXCoordinates)(6);
    it("should return undefined for setPlateauEndXCoordinates() >7 ", function () {
        expect((0, plateau_2.getPlateauEndXCoordinates)()).toBe(undefined);
    });
});
describe("test set Plateau End Y Coordinates", function () {
    (0, plateau_1.setPlateauEndYCoordinates)(-1);
    it("should return undefined for setPlateauEndYCoordinates() = -1", function () {
        expect((0, plateau_2.getPlateauEndYCoordinates)()).toBe(undefined);
    });
});
describe("test set Plateau End Y Coordinates", function () {
    (0, plateau_1.setPlateauEndYCoordinates)(6);
    it("should return undefined for setPlateauEndYCoordinates() = 8", function () {
        expect((0, plateau_2.getPlateauEndYCoordinates)()).toBe(undefined);
    });
});
