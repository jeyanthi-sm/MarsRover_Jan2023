import { PLATEAU_END_RANGE, PLATEAU_START_RANGE } from "./plateau";
import { roverWhereAbouts } from "./roverDetails";
import { setRoverXCoordinates, setRoverYCoordinates, setRoverFacingDirection } from "./roverDetails";
import { getRoverWhereAbouts } from "./roverDetails";

describe("test set Rover Facing Direction ", () => {
    setRoverFacingDirection('nesw');    
    it("should return NESW for setRoverFacingDirection()", () => {
        expect(getRoverWhereAbouts().facingDirection).toBe('NESW');
    });
});


describe("test set Rover X Coordinates to 0 ", () => {
    setRoverXCoordinates(-1);    
    it("should return undefined for setRoverXCoordinates()", () => {
        expect(getRoverWhereAbouts().xcoordinates).toBe(0);
    });
});

describe("test set Rover X Coordinates to 2 ", () => {
    setRoverXCoordinates(2);    
    it("should return undefined for setRoverXCoordinates()", () => {
        expect(getRoverWhereAbouts().xcoordinates).toBe(2);
    });
});

describe("test set Rover X Coordinates to 0 ", () => {
    setRoverXCoordinates(6);    
    it("should return undefined for setRoverXCoordinates()", () => {
        expect(getRoverWhereAbouts().xcoordinates).toBe(0);
    });
});


describe("test set Rover Y Coordinates to 0 ", () => {
    setRoverYCoordinates(6);    
    it("should return undefined for setRoverYCoordinates()", () => {
        expect(getRoverWhereAbouts().ycoordinates).toBe(0);
    });
});

describe("test set Rover Y Coordinates to 2 ", () => {
    setRoverYCoordinates(2);    
    it("should return undefined for setRoverYCoordinates()", () => {
        expect(getRoverWhereAbouts().ycoordinates).toBe(2);
    });
});

describe("test set Rover Y Coordinates to 0 ", () => {
    setRoverYCoordinates(-1);    
    it("should return undefined for setRoverYCoordinates()", () => {
        expect(getRoverWhereAbouts().ycoordinates).toBe(0);
    });
});


