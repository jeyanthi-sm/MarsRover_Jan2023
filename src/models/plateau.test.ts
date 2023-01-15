
import { setPlateauStartXCoordinates, setPlateauStartYCoordinates, setPlateauEndXCoordinates, setPlateauEndYCoordinates } from '../models/plateau';
import { getPlateauStartXCoordinates, getPlateauStartYCoordinates, getPlateauEndXCoordinates, getPlateauEndYCoordinates } from '../models/plateau';


describe("test set Plateau Start X Coordinates", () => {
    const returnValue = 0;
    setPlateauStartXCoordinates();

    it("should return 0 for setPlateauStartXCoordinates()", () => {
        expect(getPlateauStartXCoordinates()).toBe(returnValue);
    });
});


describe("test set Plateau Start Y Coordinates", () => {
    const returnValue = 0;
    setPlateauStartYCoordinates();

    it("should return 0 for setPlateauStartYCoordinates()", () => {
        expect(getPlateauStartYCoordinates()).toBe(returnValue);
    });
});


describe("test set Plateau End X Coordinates", () => {
    const inputValue = -1;
    const returnValue = undefined;
    setPlateauEndXCoordinates(inputValue);

    it("should return undefined for setPlateauEndXCoordinates() -1 ", () => {
        expect(getPlateauEndXCoordinates()).toBe(returnValue);
    });
});

describe("test set Plateau End X Coordinates", () => {
    const inputValue = 2;
    const returnValue = 2;
    setPlateauEndXCoordinates(inputValue);

    it("should return undefined for setPlateauEndXCoordinates() -1 ", () => {
        expect(getPlateauEndXCoordinates()).toBe(returnValue);
    });
});


describe("test set Plateau End X Coordinates", () => {
    const inputValue = 6;
    const returnValue = undefined;
    setPlateauEndXCoordinates(inputValue);

    it("should return undefined for setPlateauEndXCoordinates() >7 ", () => {
        expect(getPlateauEndXCoordinates()).toBe(returnValue);
    });
});

describe("test set Plateau End Y Coordinates", () => {
    const inputValue = -1;
    const returnValue = undefined;
    setPlateauEndYCoordinates(inputValue);

    it("should return undefined for setPlateauEndYCoordinates() = -1", () => {
        expect(getPlateauEndYCoordinates()).toBe(returnValue);
    });
});

describe("test set Plateau End Y Coordinates", () => {
    const inputValue = 6;
    const returnValue = undefined;
    setPlateauEndYCoordinates(inputValue);

    it("should return undefined for setPlateauEndYCoordinates() = 8", () => {
        expect(getPlateauEndYCoordinates()).toBe(returnValue);
    });
});

