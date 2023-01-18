
import { setPlateauStartXCoordinates, setPlateauStartYCoordinates, setPlateauEndXCoordinates, setPlateauEndYCoordinates, plateau, plateauInit } from '../models/plateau';
import { getPlateauStartXCoordinates, getPlateauStartYCoordinates, getPlateauEndXCoordinates, getPlateauEndYCoordinates } from '../models/plateau';


describe("test set Plateau Start X Coordinates", () => {
    const returnValue = 0;
    let currentPlateauInstance:plateau = new plateau();   
    setPlateauStartXCoordinates(currentPlateauInstance);

    it("should return 0 for setPlateauStartXCoordinates()", () => {
        expect(getPlateauStartXCoordinates(currentPlateauInstance)).toBe(returnValue);
    });
});


describe("test set Plateau Start Y Coordinates", () => {
    const returnValue = 0;

    let currentPlateauInstance:plateau = new plateau();   
    setPlateauStartXCoordinates(currentPlateauInstance);
    setPlateauStartYCoordinates(currentPlateauInstance);

    it("should return 0 for setPlateauStartYCoordinates()", () => {
        expect(getPlateauStartYCoordinates(currentPlateauInstance)).toBe(returnValue);
    });
});


describe("test set Plateau End X Coordinates", () => {
    const inputValue = -1;
    const returnValue = undefined;

    let currentPlateauInstance:plateau = new plateau();   
    setPlateauStartXCoordinates(currentPlateauInstance);

    setPlateauEndXCoordinates(currentPlateauInstance,inputValue);

    it("should return undefined for setPlateauEndXCoordinates() -1 ", () => {
        expect(getPlateauEndXCoordinates(currentPlateauInstance)).toBe(returnValue);
    });
});

describe("test set Plateau End X Coordinates", () => {
    const inputValue = 6;
    const returnValue = undefined;

    let currentPlateauInstance:plateau = new plateau();   
    setPlateauStartXCoordinates(currentPlateauInstance);
    setPlateauEndXCoordinates(currentPlateauInstance,inputValue);

    it("should return undefined for setPlateauEndXCoordinates() >7 ", () => {
        expect(getPlateauEndXCoordinates(currentPlateauInstance)).toBe(returnValue);
    });
});

describe("test set Plateau End Y Coordinates", () => {
    const inputValue = -1;
    const returnValue = undefined;

    let currentPlateauInstance:plateau = new plateau();   
    setPlateauStartXCoordinates(currentPlateauInstance);
    setPlateauEndYCoordinates(currentPlateauInstance,inputValue);

    it("should return undefined for setPlateauEndYCoordinates() = -1", () => {
        expect(getPlateauEndYCoordinates(currentPlateauInstance)).toBe(returnValue);
    });
});

describe("test set Plateau End Y Coordinates", () => {
    const inputValue = 6;
    const returnValue = undefined;

    let currentPlateauInstance = plateauInit();
    setPlateauStartXCoordinates(currentPlateauInstance);
    setPlateauEndYCoordinates(currentPlateauInstance,inputValue);

    it("should return undefined for setPlateauEndYCoordinates() = 8", () => {
        expect(getPlateauEndYCoordinates(currentPlateauInstance)).toBe(returnValue);
    });
});

