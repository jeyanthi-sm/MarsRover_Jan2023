import { PLATEAU_END_RANGE, PLATEAU_START_RANGE } from "./plateau";
import { roverWhereAbouts } from "./roverDetails";
import { setRoverXCoordinates, setRoverYCoordinates, setRoverFacingDirection } from "./roverDetails";
import { getRoverWhereAbouts } from "./roverDetails";


describe("test set Rover X Coordinates to 0 ", () => {
    const inputValue = -1;
    const returnValue = 0;
    setRoverXCoordinates(inputValue);
    it("should return undefined for setRoverXCoordinates()", () => {
        expect(getRoverWhereAbouts().xcoordinates).toBe(returnValue);
    });
});

describe("test set Rover X Coordinates to 2 ", () => {
    const inputValue = 2;
    const returnValue = 2;
    setRoverXCoordinates(inputValue);
    it("should return undefined for setRoverXCoordinates()", () => {
        expect(getRoverWhereAbouts().xcoordinates).toBe(returnValue);
    });
});

describe("test set Rover X Coordinates to 0 ", () => {
    const inputValue = 6;
    const returnValue = 0;
    setRoverXCoordinates(inputValue);
    it("should return undefined for setRoverXCoordinates()", () => {
        expect(getRoverWhereAbouts().xcoordinates).toBe(returnValue);
    });
});


describe("test set Rover Y Coordinates to 0 ", () => {
    const inputValue = 6;
    const returnValue = 0;
    setRoverYCoordinates(inputValue);
    it("should return undefined for setRoverYCoordinates()", () => {
        expect(getRoverWhereAbouts().ycoordinates).toBe(returnValue);
    });
});

describe("test set Rover Y Coordinates to 2 ", () => {
    const inputValue = 2;
    const returnValue = 2;

    setRoverYCoordinates(inputValue);
    it("should return 2 for setRoverYCoordinates()", () => {
        expect(getRoverWhereAbouts().ycoordinates).toBe(returnValue);
    });
});

describe("test set Rover Y Coordinates to 0 ", () => {
    const inputValue = -1;
    const returnValue = 0;

    setRoverYCoordinates(inputValue);
    it("should return undefined for setRoverYCoordinates()", () => {
        expect(getRoverWhereAbouts().ycoordinates).toBe(returnValue);
    });
});


describe("test set Rover Facing Direction ", () => {
    const inputValue = 'n';
    const returnValue = 'N';
    setRoverFacingDirection(inputValue);
    it("should return N for setRoverFacingDirection()", () => {
        expect(getRoverWhereAbouts().facingDirection).toBe(returnValue);
    });
});


describe("test set Rover Facing Direction ", () => {
    const inputValue = 'T';
    const returnValue = '';
    setRoverFacingDirection(inputValue);
    it("should return empty string for setRoverFacingDirection()", () => {
        expect(getRoverWhereAbouts().facingDirection).toBe(returnValue);
    });
});


